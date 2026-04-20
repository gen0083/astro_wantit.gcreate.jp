wantit
===

## build

miseを使っているので、mise経由で実行できる。

- `mise run dev` デバッグサーバを起動する
- `mise run build` ビルド

## 新しい記事の作成

`mise run new -- -i post/{sub-category}/{post-name}`

`mise run new post/{sub-category}/{post-slug}.md`

画像なしの記事を作成したい場合は下を選ぶ。
記事中に画像を組み込む場合は`-- -i`で指定したslugでディレクトリが作成されるので、その中に画像を配置して参照する。

slugが重複している場合、ビルド時にエラーが出るようになるのでその際はslugをユニークなものに変更すること。

画像の配置は`![alt属性で表示される説明文](画像ファイル名)`。

## タグについて

frontmatterで設定する。

```
tags:
    - タグ1
    - タグ2
```

タグを設定しない場合は`tags`はあってもいいが、その配下のリストは削除しておくこと。
`-`だけあるとpermalinkの重複によってビルドが失敗する。

## サマリについて

サマリを登録する方法は2つ

1. `<!--more-->`までの部分に書いたもの
2. frontmatterの`description`に書いたもの

記事の一覧画面で表示される文字列になる。

## textlintの一時的な無効化

どうしてもtextlintのルールを無視したい場合はつぎのコメントを挿入することで、部分的にtextlintを無効化できる。

```
<!-- textlint-disable -->
ここはtextlintのルールを無視してもエラーにならない
<!-- textlint-enable -->
以降はtextlintのルールが有効になってチェックされる。
```

記事中で話し言葉っぽい書き方をどうしてもしたいときなどに使える。

## デプロイ

現状では記事を書いたらプルリクを送り、その後`main`にマージしたら公開されるようになっている。

`git push`したあと`hub pull-request`でプルリクを送る。マージはGitHub上でやる。

`./script/delete-merged-branch.sh`を実行すれば作成したマージ済みのブランチを消すことができる。
