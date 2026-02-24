---
title: Sassを使ってブログデザイン変更してみて実際に便利だった機能を紹介
slug: designchange
description: Web制作者のためのSassの教科書を読んで、ブログのデザインに活用してみました。その際に、使ってみて実際に便利だなと思った機能を紹介します。基本的にCSSと同じなので、使えそうなところだけつまみ食いする感じで使うといいと思います。
featuredimage: images/cover/book.jpg
date: 2013-12-23
lastmod: 2015-03-03
tags: 
    - Web
product:
    name: 'Web制作者のためのSassの教科書'
    number: '4844334662'
    rate: 4.5
    link: 'https://book.scss.jp/'
    comment: 'リファレンス的な使い方ができるので、簡単なところから使っていくと良い。'
    kaeyome: '<div class="booklink-box"><div class="booklink-image"><a href="https://www.amazon.co.jp/exec/obidos/asin/4844334662/illusionspace-22/" rel="nofollow" target="_blank"><img src="https://ecx.images-amazon.com/images/I/51xkjL4k%2BRL._SL160_.jpg" style="border: none;" /></a></div><div class="booklink-info"><div class="booklink-name"><a href="https://www.amazon.co.jp/exec/obidos/asin/4844334662/illusionspace-22/" rel="nofollow" target="_blank">Web制作者のためのSassの教科書 これからのWebデザインの現場で必須のCSSメタ言語</a><div class="booklink-powered-date">posted with <a href="https://yomereba.com" rel="nofollow" target="_blank">ヨメレバ</a></div></div><div class="booklink-detail">平澤 隆,森田 壮 インプレスジャパン 2013-09-13    </div><div class="booklink-link2"><div class="shoplinkamazon"><a href="https://www.amazon.co.jp/exec/obidos/asin/4844334662/illusionspace-22/" rel="nofollow" target="_blank" title="アマゾン" >Amazonで購入</a></div><div class="shoplinkrakuten"><a href="https://hb.afl.rakuten.co.jp/hgc/11acbc01.369b1bf6.11acbc02.cabf9fe9/?pc=http%3A%2F%2Fbooks.rakuten.co.jp%2Frb%2F12451132%2F%3Fscid%3Daf_ich_link_urltxt%26m%3Dhttp%3A%2F%2Fm.rakuten.co.jp%2Fev%2Fbook%2F" rel="nofollow" target="_blank" title="楽天ブックス" >楽天ブックスで購入</a></div>                  	  <div class="shoplinkkino"><a href="https://ck.jp.ap.valuecommerce.com/servlet/referral?sid=3085416&pid=882196163&vc_url=http%3A%2F%2Fwww.kinokuniya.co.jp%2Ff%2Fdsg-01-9784844334668" target="_blank" title="kino" >紀伊國屋書店で購入<img src="https://ad.jp.ap.valuecommerce.com/servlet/gifbanner?sid=3085416&pid=882196163" height="1" width="1" border="0"></a></div>	  	  	</div></div><div class="booklink-footer"></div></div>'
---

ちまちまと作業していたブログデザインがようやく固まりました。

今までPC用とスマホ用の2つのCSSを使ってデザインをしていましたが、<em>スマホの方は基本的には放置</em>していました。というのも、PC版で更新した部分を、<em>スマホ版にコピペするのが面倒くさかった</em>のです。今回のデザイン変更によって、<em>PC版・スマホ版の区別をなくした</em>ため、スマホでもデザインがすっきりと見やすくなったと思います。

近頃流行りの<em>レスポンシブデザインを取り入れ</em>、今までChromeでしか確認していなかった表示も、IE等で確認してちゃんと表示が崩れていないかを確認しました。IE8でみたとき、かなりひどく崩れていたので、見に来てくれた人には迷惑をかけていたかもしれません。

それにしても、<strong>Sassがなければとてもじゃないが作業できなかった</strong>と思います。

そこで<strong>今回のデザイン修正で便利だったと思うSassの機能</strong>を紹介します。


## ネスト

```
.main{
  margin: 10px;
}
.main .post{
  border: 1px solid black;
}
.main .post .title{
  font-size: 26px;
}
　　　↓　これがネストを使うとこうなる

.main{
  margin: 10px;
  .post{
    border: 1px solid black;
    .title{
      font-size: 26px;
    }
  }
}
```

ネストすることで<em>見やすくなる</em>というのが利点ですが、それに加えて<em>変更にも強くなります</em>。

上記のコードでいえば、<em>.main</em>というクラス名をHTML側で<em>.entry</em>というクラス名にしたい場合）を考えてみましょう。ネストしていないCSSでは<em>.mainという記述が3箇所ある</em>ので、そこを全部変更し無くてはなりません。一方でネストして記述しているSassでは、<em>.mainは1箇所に書いてあるだけ</em>なので、<strong>そこを変更するだけですむ</strong>のです。

今回のデザイン変更でHTML側も含めて手を加えたため、この<em>ネストが大活躍</em>しました。

## 変数

私は変数は色しか使っていませんが、それだけでもかなり楽になりました。たとえば$main-colorという変数を設定し、#EDF2FAという色（うちのサイトで使っている薄い青色）を指定する。後は同じ色を指定したい場所に、$main-colorと記述すれば済むようになります。

今までは同じ色を指定しているスタイルを探して、カラーコードをコピーしてくるという手間がありました。変数を利用することでそれがなくなり、<strong>デザインを調整することに集中でき</strong>て作業がとても捗りました。

## ミックスイン

`@mixin`で作成することができるが、使い方がいろいろできてこれも便利でした。


### 同じスタイルをまとめる


clearfixというテクニックを利用していますが、何度も同じ記述を繰り返すのが面倒くさいので、mixinで使いまわしたのです。

```
@mixin clearfix{
    content:" ";
    display: block;
    clear: both;
}

//使いたい場所で
@include clearfix;
```

今後互換性を考えてスタイルを変更する場合は、このmixinだけを変更すれば全部変わります。

### 引数を使ってスタイルを可変させる

<em>mixinには引数を渡すことができる</em>ので、すべて固定のスタイルだけではなく、一部数字を変えるような使い方もできます。

```
@mixin flexitem($grow :1, $shrink: 1, $basis: auto){
    -webkit-flex: $grow $shrink $basis;
    -moz-flex: $grow $shrink $basis;
    -ms-flex: $grow $shrink $basis;
    flex: $grow $shrink $basis;
}

//使いたい場所で
@include flexitem(1,1,120px);
```

flex-boxなど、ベンダープレフィクスが必要なスタイルを設定する場合、同じような記述を何度も行う必要があります。これを変数と組み合わせてまとめて記述できるようにすると、非常に便利。

### メディアクエリに活用

レスポンシブデザインにするために、メディアクエリを多用したのですが、その際にもmixinが大活躍。

```
@mixin break-1st{
    @media screen and (max-width: 985px){
        @content;
    }
}

.main{
    width: 986px;
    margin: 10px auto;
    @include break-1st{
        //.mainのスタイルが、985px以下の画面幅の場合にこの中に記述したスタイルで上書きされる
        witdh: 100%;
    }
}
```

特定の画面幅次の場合にだけ変更したいスタイルを、このmixinを使って設定しました。

ただ、この書き方をすると、<strong>メディアクエリが記述した数だけ出力されてしまうので、出力されるCSSがとても汚くなります</strong>。自動的にbreak-1stで記述したものが、まとまって記載されるわけではないので注意が必要です。


## Sassのコンパイルスタイル


Scssファイルは<strong>コンパイルして、CSSファイルに変換しないと使えません</strong>。

その際に便利なのが、<em>&#8211;style compressed</em>オプションです。これは出力されるCSSが、<em>改行・インデントがない状態</em>でコンパイルされるオプションです。

このブログのCSSでいうと、このオプションを<em>使わない場合のファイルサイズは31KB</em>ありますが、<em>使うと22KB</em>に小さくなります。改行やインデントだけで9KBもファイルサイズが大きくなっているわけです。記述するスタイルシートの量が増えれば増えるほど、このインデントなどによるファイルサイズの肥大化は深刻になってきます。

出力されるCSSファイルはとてつもなく見づらくなってしまいますが、編集はSassファイルでやるので問題ありません。


## 少しずつ複雑な機能に手を出していけばいい


以上のように、私のサイトで使っているSassのテクニックなど、単純なものしかありません。

Sassのいいところは、<strong>簡単なところから手を付けてやるだけでも、相当に便利になる</strong>というところです。

Sass使いたいなと思っている人は、<em>とりあえず既存のCSSをネストで記述してやるだけでも格段に便利になると思います</em>。複雑な機能はそのうち覚えていけばいいので、ぜひぜひ挑戦してみてください。
