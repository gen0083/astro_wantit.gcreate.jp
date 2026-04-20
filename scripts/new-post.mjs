import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const args = process.argv.slice(2);
const isIndex = args.includes('-i');
const inputPath = args.find(arg => arg !== '-i');

if (!inputPath) {
  console.error('Usage: node scripts/new-post.mjs -- [-i] post/diy/some[.md]');
  process.exit(1);
}

const projectRoot = path.resolve(__dirname, '..');
const templateFile = path.join(__dirname, 'template.md');

let targetFile;
let slug;

if (isIndex) {
  // -i オプションあり: src/content/post/diy/some/index.md
  targetFile = path.join(projectRoot, 'src/content', inputPath, 'index.md');
  slug = path.basename(inputPath);
} else {
  // -i オプションなし: src/content/post/diy/some.md
  targetFile = path.join(projectRoot, 'src/content', inputPath);
  slug = path.basename(inputPath, path.extname(inputPath));
}

// "post/{path}/{slug}" の {path} を取得 (post/ の直後のディレクトリ)
const match = inputPath.match(/post\/([^/]+)\//);
const parentPath = match ? match[1] : '';

// タイムゾーンを考慮した現在日時を生成 (YYYY-MM-DDTHH:mm:ss+09:00 の形式)
const now = new Date();
const offset = now.getTimezoneOffset();
const sign = offset > 0 ? '-' : '+';
const absOffset = Math.abs(offset);
const hours = String(Math.floor(absOffset / 60)).padStart(2, '0');
const minutes = String(absOffset % 60).padStart(2, '0');
const dateStr = new Date(now.getTime() - offset * 60000).toISOString().slice(0, 19) + sign + hours + ':' + minutes;

// テンプレートを読み込み、プレースホルダーを置換
let content = fs.readFileSync(templateFile, 'utf8');
content = content
  .replace(/\{\{SLUG\}\}/g, slug)
  .replace(/\{\{PARENT_PATH\}\}/g, parentPath)
  .replace(/\{\{DATE\}\}/g, dateStr);

// 保存先のディレクトリを作成
const targetDir = path.dirname(targetFile);
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, {recursive: true});
}

// 新規記事ファイルを作成
fs.writeFileSync(targetFile, content, 'utf8');

console.log(`Successfully created: ${path.relative(projectRoot, targetFile)}`);
