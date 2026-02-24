---
title: Effective Android読んだ感想
slug: effective-android
description: Effective Javaに似たタイトルの本ですが、手にとって読んでみると意外とフランクな感じの面白い本でした。内容の難易度が平易なものから極端に難解なものまでいろいろですが、個人的にGradle関連の話題が非常に勉強になりました。
featuredimage: images/cover/book.jpg
date: 2014-06-30
lastmod: 2015-01-22
tags: 
    - Android
    - スマホ
    - プログラミング
    - 勉強
product:
    name: 'Effective Android'
    rate: 4.5
    link: 'https://tatsu-zine.com/books/effective-android'
    comment: 'マニアックな話題もあるものの、勉強になる話題が豊富な良本。'
    kaeyome: '<div class="booklink-box"><div class="booklink-image"><a href="https://www.amazon.co.jp/exec/obidos/asin/4844335340/illusionspace-22/" rel="nofollow" target="_blank"><img src="https://ecx.images-amazon.com/images/I/41CE7ad4jUL._SL160_.jpg" style="border: none;" /></a></div><div class="booklink-info"><div class="booklink-name"><a href="https://www.amazon.co.jp/exec/obidos/asin/4844335340/illusionspace-22/" rel="nofollow" target="_blank">Effective Android</a><div class="booklink-powered-date">posted with <a href="https://yomereba.com" rel="nofollow" target="_blank">ヨメレバ</a></div></div><div class="booklink-detail">TechBooster,小太刀御禄,出村成和,重田大助,西岡靖代,宮川大輔,柏本和俊,あんざいゆき,八木俊広,木村尭海,小林慎治,有山圭二,中西良明,わかめ まさひろ,新井祐一,桝井草介,久郷達也,寺園聖文,shige0501,山下智樹,前田章博,秋葉ちひろ,末広尚義,中澤慧,日高正博,塚田翔也,井形圭介,中川幸哉,山崎誠,山下武志,なまそで,橋爪香織,さとうかずのり,l_b__ インプレスジャパン 2014-01-17    </div><div class="booklink-link2"><div class="shoplinkamazon"><a href="https://www.amazon.co.jp/exec/obidos/asin/4844335340/illusionspace-22/" rel="nofollow" target="_blank" title="アマゾン" >Amazonで購入</a></div><div class="shoplinkrakuten"><a href="https://hb.afl.rakuten.co.jp/hgc/11acbc01.369b1bf6.11acbc02.cabf9fe9/?pc=http%3A%2F%2Fbooks.rakuten.co.jp%2Frb%2F12618244%2F%3Fscid%3Daf_ich_link_urltxt%26m%3Dhttp%3A%2F%2Fm.rakuten.co.jp%2Fev%2Fbook%2F" rel="nofollow" target="_blank" title="楽天ブックス" >楽天ブックスで購入</a></div></div></div><div class="booklink-footer"></div></div>'
---

Androidのプログラムを作るのに、最近はいろいろな本を読むようになりました。ネットで調べれば情報は出てくるのですが、本でまとめて勉強した方が理解しやすい気がします。

本を購入するのも、必要になったらとかもっとスキルアップしてからとかいろいろ理由をつけて先延ばしにしていました。しかしいつまでたってもスキルアップが望めないので、買った方がさっさと勉強できるだろうと、いいなと思った本はどんどん買うようにしてみました。

今回はそんな中から「<strong>Effective Android</strong>」という本をご紹介します。

## 読みやすい楽しい本

名前がEffective Javaに似ている本です。その名前から、Effective Javaのような本なのかなと思っていたのですが、どうもそういうわけでもないようです。「こんな実装やっちゃダメだよ」という<em>堅苦しい本なのかなと思っていたのですが、読んでみると思いの外フランクです</em>。

たとえば、本を開いて1つ目の話題が、<em>アプリのデザインを考える上での基本的なところ</em>からはじまります。配置するオブジェクトのサイズや並びを揃えたり、メニューの場所をどこにするかだったり。無個性なアプリから抜け出すためにどういう色使いを心がけたらいいか、そういったことから始まるのです。

私は上級者の人が読むような、もっと難しくてややこしい話ばかりなのかなと思っていたのですが、実際に読んでみるとびっくりです。意外とすんなり読めます。

## 多岐にわたる話題

本書は6章構成となっています。

<ul>
<li>デザイン、ユーザーインターフェース</li>
<li>開発環境にかかわる話、設定ファイル</li>
<li>アプリケーションのプログラム部分、データベースやデータの保存、テスト方法などについて</li>
<li>ライブラリを利用する方法</li>
<li>Androidプラットフォーム、セキュリティなどについて</li>
<li>Androidから離れて、GitやJava8などの周辺技術について</li>
</ul>

私のレベルでは半分以上理解不能な部分もあるのですが、読んでいて苦にはなりません。この本は、「こういうことがやりたいんだけど、どうやったらできるのか」とやり方を調べる目的で買う本ではないのかもしれません。<em>何となく読んで「へぇ、そんなことできるんだ」というスタンスで購入した方が面白い</em>のかもしれません。

おそらく私では一生使いそうもないネタも多分に含まれているのですが、勉強になる部分も多分に含まれていました。<em>中でも一番ありがたく、かつ私にとってタイムリーな話題だったのがGradleについての話でした</em>。

## Android Studioを意識した数少ない本

<strong>Effective Androidは、おそらく書籍の中でAndroid Studioに触れている数少ない本</strong>だといえます。

Android StudioはAndroidプログラミングを行うためのIDEです。私はAndroidプログラミングにはこのAndroid Studioを使っています。Android Studioを使っていて困るのは、情報が少ないことです。

書籍でのAndroidプログラミングの解説は、ほぼ100％Eclipse向けです。<em>Android Studioではどうやればいいのかということがさっぱり分からない</em>ので、サンプルコードを打つ手前の部分で躓いてしまうという残念な状況が続きました。素直にEclipseを使えばいいのですが、なんか負けた気がして癪です。

そんな中でこの本は、Android Studioについての話題がほんの少しですが書いてありました。個人的に非常にありがたかったのが、Gradleについての話があったことでした。

Android Studio（というよりGradle）が便利だという話を聞いたのも、Gradleの何が便利なのか、どういう仕組なのかがいまいち理解できません。調べてもなんかよく分からず、もやもやっとしたままだったのですが、本書を読んで何となく仕組みが理解できました。

Gradleの本質を理解したわけではないと思うのですが、build.gradleにちょろっと書くだけで外部ライブラリを用意してくれるので、確かにこいつは便利だなと思いました。

## 駆け出しの人でも持っておくといいと思います

レベルが足りないからといって買うのをためらっていましたが、私は買ってよかったなと思っています。

理解できていない部分やまだまともに読んでいない部分も多いのですが、勉強になるところや助かったところも多いです。個人的にAndroid Studioの話題があるだけでかなり助かりました。

値がそれなりに張るので、気軽に購入するのは難しいかもしれませんが、図書館などを利用して一度目を通してみてはいかがでしょうか。
