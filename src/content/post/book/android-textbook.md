---
title: プロの力が身につく Androidプログラミングの教科書を読んだ感想
slug: android-textbook
description: Androidアプリ作成について、ネットで調べたりしながら独学で勉強していると、知識が断片化してしまってそれぞれの関係性がよくわからなくなってきます。この本はそういった「全体像を掴みたい」といった人にオススメな本だと思いました。
featuredimage: images/cover/book.jpg
date: 2014-03-29
lastmod: 2015-01-24
tags: 
    - Android
    - プログラミング
    - 勉強
product:
    name: 'プロの力が身につく Androidプログラミングの教科書'
    number: '4797372486'
    rate: 4
    link: 'https://android-textbook.com/'
    comment: '最初の1冊としてより、2冊目として最適な位置づけ。'
    kaeyome: '<div class="booklink-box"><div class="booklink-image"><a href="https://www.amazon.co.jp/exec/obidos/asin/4797372486/illusionspace-22/" rel="nofollow" target="_blank"><img src="https://ecx.images-amazon.com/images/I/51J7UGXlK2L._SL160_.jpg" style="border: none;" /></a></div><div class="booklink-info"><div class="booklink-name"><a href="https://www.amazon.co.jp/exec/obidos/asin/4797372486/illusionspace-22/" rel="nofollow" target="_blank">プロの力が身につく Androidプログラミングの教科書</a><div class="booklink-powered-date">posted with <a href="https://yomereba.com" rel="nofollow" target="_blank">ヨメレバ</a></div></div><div class="booklink-detail">藤田 竜史,要 徳幸,住友 孝郎,日高 正博,小林 慎治,木村 尭海 ソフトバンククリエイティブ 2013-07-30    </div><div class="booklink-link2"><div class="shoplinkamazon"><a href="https://www.amazon.co.jp/exec/obidos/asin/4797372486/illusionspace-22/" rel="nofollow" target="_blank" title="アマゾン" >Amazonで購入</a></div><div class="shoplinkrakuten"><a href="https://hb.afl.rakuten.co.jp/hgc/11acbc01.369b1bf6.11acbc02.cabf9fe9/?pc=http%3A%2F%2Fbooks.rakuten.co.jp%2Frb%2F12383691%2F%3Fscid%3Daf_ich_link_urltxt%26m%3Dhttp%3A%2F%2Fm.rakuten.co.jp%2Fev%2Fbook%2F" rel="nofollow" target="_blank" title="楽天ブックス" >楽天ブックスで購入</a></div>                         <div class="shoplinkkino"><a href="https://ck.jp.ap.valuecommerce.com/servlet/referral?sid=3085416&pid=882196163&vc_url=http%3A%2F%2Fwww.kinokuniya.co.jp%2Ff%2Fdsg-01-9784797372489" target="_blank" title="kino" >紀伊國屋書店で購入<img src="https://ad.jp.ap.valuecommerce.com/servlet/gifbanner?sid=3085416&pid=882196163" height="1" width="1" border="0"></a></div>                   </div></div><div class="booklink-footer"></div></div>'
---

こんにちは、Androidアプリ開発したいなぁと思っているGenです。

私のAndroidアプリ開発経験は、<em>ものすごい簡単なアプリを作ったことがあるだけ</em>です。画面は1つだけで、ボタン押したら端末内に保存しているデータをランダムに表示するだけなアプリなので、開発といえるレベルのものではないのですね。

<em>MixiのAndroidトレーニング</em>など、オンラインで情報集めて勉強していたのですが、ネットの情報だけでは限界を感じたのでちゃんと本買って勉強することにしました。

とは言ったものの、じゃあ<strong>実際どんな本を買おうかと迷いました</strong>。

Androidアプリ開発の本はいろいろあるのですが、どの本を見ても今ひとつしっくり来ません。ハウツー本は多いですが、それだけでは本に書いてあるアプリは作れても、<em>自分で作りたいアプリは作れません</em>。

何かいいものがないかなと探している時、この「<em>Androidプログラミングの教科書</em>」に出会いました。この本は<em>最初の1冊としてより、2冊目として最適な位置づけ</em>ではないでしょうか。ハウツー本を読んだけど、結局Androidアプリ開発がよく分からないという人にピッタリだと思います。


## 本書の構成


本書は6章構成となっています。

<ol>
<li>Androidの歴史、開発環境（Eclipse）などの話</li>
<li>Androidの基本（基本となる4つのコンポーネント、ライフサイクルなど）</li>
<li>画面設計・UI（Androidで利用できるユーザーインタフェースなど）</li>
<li>実装テクニック（イベントハンドリング、スレッドなど）</li>
<li>データの管理・保存（Activity間のデータのやりとり、ストレージへの保存など）</li>
<li>デバッグ・検証</li>
</ol>

面白いなと思ったのは、<strong>検証方法について書かれているところ</strong>です。アプリを作ったがいいが、どうやってデバッグしていくのか、品質を上げるにはどうしたらよいのかという点まで突っ込んでいる本というのはなかなかないのではないでしょうか？


## デバッグに触れているのは珍しい？


デバッグ・検証の章は次の解説がありました。

<ul>
<li>SDKに含まれるツールの紹介</li>
<li>デバッグの手法 </li>
<li>静的解析</li>
<li>アプリケーションのテスト手法と、各種テストのサンプル</li>
</ul>

デバッグには、アプリケーション自体にデバッグ用コードを仕込ませるのではなく、デバッグ用のテストプログラムを作ってそちらで確認をしたほうがよいみたいです。

今まで私はアプリケーション本体にテスト用のコードを書いていたのですが、それだと完成したアプリにもデバッグ用のコードが紛れることになります。アプリ本体とデバッグコードを分離することは、アプリケーション完成後にデバッグ用コードを削除する手間が省けますし、スパゲティコード化を防ぐ意味合いもあるそうです。

私はAndroidアプリを作成しても、デバッグをどうしたらいいのかというのがよく分かりませんでした。エミュレータで動かしても、ちゃんと問題なく動作しているのかイマイチ分かりません。その点、本書を読むことで<em>「こういう風にデバッグしていけばいいのか」ということが分かってスッキリしました</em>。

## 注意点


この本は、<em>何か1つのアプリを作成するという本ではありません</em>。たとえばアプリでイベントを検出する方法はこうしましょう、イベントをハンドリングするにはこういう考え方がありますという感じで話が進んでいき、それぞれの機能毎にサンプルコードが用意されているという感じです。サンプルコードはありますが、あくまで<em>各機能の動作を確認するためのもの</em>です。

そのため、<em>この本を読んだだけでアプリ作成ができるようになるわけではない</em>ことに注意が必要です。特に、<em>Androidのアプリ開発の経験がない人には、この本は難しい</em>かもしれません。まったくの初学という人は、まずはハウツー本で、アプリ開発の雰囲気を感じ取った方がいいと思います。

## 部分的な知識の繋がりが分かった


Androidアプリ開発についての本は、「こうすればこんなアプリが作れますよ」という、ハウツー形式のものが多いです。

書かれているアプリは作成できるけど、具体的に自分の作りたいアプリを作成するのに利用できるとは限りません。また、「こうやればこう動く」という個々の機能に焦点を当てているため、<em>包括的な知識を得にくい</em>と思います。

たとえば、Activity間のデータの受け渡しをするためには、どのような方法があるのか。ネットでやり方を調べて、サンプルプログラムにあった方法だけしかないと思い込んでいないでしょうか。この本には、Activity間のデータの受け渡しをするためにとることのできる手法とその実装方法、注意点といったことが体系的に学べる数少ない存在だと思います。

この本は全体的な考え方について学ぶのにちょうどいいと思います。おかげで私の中で今までバラバラだった部分的な知識が、それぞれどう関連しているのかを理解する助けになり、全体像が何となくですが理解できた気がします。
