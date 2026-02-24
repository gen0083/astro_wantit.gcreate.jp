---
title: Cintiq 13HDを変換ケーブル使ってSurface PRO2のミニディスプレイポートに繋いでみた
slug: minidisplay-to-hdmi
description: Surface PRO 2にCintiq 13HDを接続するためにミニディスプレイポート変換コネクタを利用しました。SurfaceなどのタブレットPCでCintiqを使うのはWacomの保証対象外の使い方ですが、一応問題なく使えています。
featuredimage: images/cover/pc.jpg
date: 2014-01-19
lastmod: 2015-05-01
tags: 
    - CG
    - Surface PRO2
    - イラスト
    - 周辺機器
product:
    name: 'PLANEX Mini DisplayPort to HDMI変換アダプタ'
    number: 'PL-MDPHD02'
    rate: 3
    link: 'https://www.planex.co.jp/product/av/pl-mdphd02/'
    comment: 'Cintiq 13HDをミニディスプレイポートに接続するのに使えます。'
    kaeyome: '<div class="kaerebalink-box"><div class="kaerebalink-image"><a href="https://www.amazon.co.jp/exec/obidos/ASIN/B0052GQ498/illusionspace-22/ref=nosim/" rel="nofollow" target="_blank"><img src="https://ecx.images-amazon.com/images/I/310GtzShJPL._SL160_.jpg" style="border: none;" /></a></div><div class="kaerebalink-info"><div class="kaerebalink-name"><a href="https://www.amazon.co.jp/exec/obidos/ASIN/B0052GQ498/illusionspace-22/ref=nosim/" rel="nofollow" target="_blank">PLANEX Mini Displayport -]HDMI変換アダプタ (MacBook MacBook Pro MacBook Air) PL-MDPHD02</a><div class="kaerebalink-powered-date">posted with <a href="https://kaereba.com" rel="nofollow" target="_blank">カエレバ</a></div></div><div class="kaerebalink-detail"> プラネックス 2011-06-30    </div><div class="kaerebalink-link1"><div class="shoplinkamazon"><a href="https://www.amazon.co.jp/gp/search?keywords=PL-MDPHD02&__mk_ja_JP=%83J%83%5E%83J%83i&tag=illusionspace-22" rel="nofollow" target="_blank" title="アマゾン" >Amazonで購入</a></div><div class="shoplinkrakuten"><a href="https://hb.afl.rakuten.co.jp/hgc/0e95387f.f2aef20d.0e953880.25e412bd/?pc=http%3A%2F%2Fsearch.rakuten.co.jp%2Fsearch%2Fmall%2FPL-MDPHD02%2F-%2Ff.1-p.1-s.1-sf.0-st.A-v.2%3Fx%3D0%26scid%3Daf_ich_link_urltxt%26m%3Dhttp%3A%2F%2Fm.rakuten.co.jp%2F" rel="nofollow" target="_blank" title="楽天市場" >楽天市場で購入</a></div></div></div><div class="booklink-footer" style="clear: left"></div></div>'
---

Cintiq 13HDはパソコンとはHDMIで接続します。

HDMIポートがなく、ミニディスプレイポート経由で接続する場合に、<em>この変換コネクタはちゃんと使えたよ</em>と、ただそれだけの話です。特にドライバのインストールも必要なく、繋げばちゃんと映り問題なく使用できました。Cintiq 13HDで使えるミニディスプレイポート変換コネクタをお探しの方へはそれだけなので、後の話は読み飛ばしてください。

<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=illusionspace-22&language=ja_JP&o=9&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B0052GQ498&linkId=a0463938dea62a740653eda6bb22e877"></iframe>

残りの話は、私が悪戦苦闘している<strong>Surface PRO 2とCintiq 13HDの接続の話</strong>です。

## Surfaceとの接続は動作保証対象外

まずはじめに、Surface PRO 2やCintiq 13HDに限った話ではないのですが、<strong>ワコムのペンタブレット製品は「タブレット機能を内蔵したコンピュータ」での使用は動作保証外</strong>だそうです。おそらくドライバが競合したり干渉したりするからでしょう。

試行錯誤の末、最終的にどちらもちゃんと動くようにはなっていますが、たまに挙動がおかしくなったりします。ここに書いてあるとおりにやったのにうまく動かないという可能性もあるので、<strong>実行するのはあくまで自己責任</strong>でどうぞ。


## ドライバのインストール


Cintiq 13HDは、Surfaceに繋いだだけでは使えません。Cintiqの液晶に画面は表示されるし、Cintiqの上でペンを動かすとマウスカーソルも動作もします。しかしそれはその動きは<em>マウスを動かしている</em>かのようで、ペンの位置にマウスカーソルが出てくるわけではありません。そのためCintiqのドライバをインストールしなければなりません。

### 復元ポイントの作成

Surfaceで作業に入る前に、<strong>必ず復元ポイントを作成しよう</strong>。ドライバインストール後に、おかしなことになって大変な目に遭う可能性があるからです。回復ポイントを作成していない場合、設定を戻すためには初期化するしか方法がなくなるかもしれません。そうならないためにも、<em>復元ポイントは作業前に必ず作成しておきましょう</em>。

画面右端からスライドしてチャームを表示 → 検索から「<em>回復</em>」を検索 → [<em>高度な回復ツール</em>]の［<em>システムの復元の構成</em>] → [<em>システムの保護</em>]タブの［<em>作成</em>]ボタンを押して<em>復元ポイントを作成</em>。とりあえずこれをやっておけば、ドライバのインストールでおかしくなったりしても、この時点の状態に戻すことができます。

もうすでにおかしくなってしまっている人は、<em>Surfaceを初期化するしかない</em>でしょう。初期化はチャームを表示して設定 → [PC設定の変更］ → [保守と管理］ → [回復］ → [すべてを削除してWindowsを再インストールする］です。


### ドライバのインストール

私が作業した時点での必要なソフトへのリンクは次のものです。これより最新のものが出ているかもしれないので、各自確認して<em>最新のものを入れる</em>ようにしてくださいね。

<ol>
<li><a href="https://us.wacom.com/en/feeldriver" target="_blank">Wacom Feel driverのインストール</a></li>
<li><a href="https://tablet.wacom.co.jp/download/" target="_blank">Cintiqのドライバインストール</a></li>
</ol>

<strong>先にWacom Feel Driverのインストール</strong>を行い、Cintiqのドライバインストールはその後で行います。逆にすると<em>Surfaceのペンが認識されなくなって困った</em>ので・・・。

![Surface Cintiqドライバ](./surface-driver.png)

[コントロールパネル］ → [ハードウェアとサウンド］でペンタブレットが2つ表示されていれば、SurfaceもCintiqも、<em>それぞれペンを認識してくれます</em>。

## キャンバス上でペンの位置がズレる

筆圧もペン位置もちゃんと認識してくれはしますが、その<em>動作は不安定</em>です。何が不安定かというと、SurfaceからCintiqを付け外しをすると、筆圧を検知するソフトウェアのキャンバス上だけで<em>ペンの位置がズレる症状が出る</em>のです。その場合は、一度<em>再起動をすると直ったりします</em>。実によく分からない症状です。試したソフトウェアは<em>Clip Studio Paint PRO</em>と<em>Adobe Photoshop CC</em>です。

Surfaceの電源を切ってからCintiqとの付け外しをしたら起こらないかなとも思いましたが、どうもそういう問題でもないようです。これはCintiqのドライバをインストールすることによって、WintabとTabletPCという2つのサービスが動作するようになり、それぞれが干渉したりするために起こっているのかもしれません。Cintiqを付け外しすることで、タブレットの認識できる描画領域が変わるために、動作がおかしくなるのでしょう。

CLIP STUDIO PAINT PROであれば、環境設定で両者を切り替えることができるので、<em>再起動せずとも使用するタブレットサービスを切り替えることで認識してくれるようになります</em>。他のソフトであれば、素直に再起動するしかないでしょう。


## 肝心なところが動作保証外だった


Surfaceを持ち運び場所に制約を受けず絵を描き、腰を据えて作業したいときはCintiqでガッツリ作業をする。それが私の思い描いた理想的なスタイルでした。

一応できてはいるんですが、<em>保障対象外というのがちょっと気持ち悪い</em>です。この症状はCintiqに限らず、Intuosなどの板タブレットでも同じようになると思います。<em>あくまでWacomの動作保証外の使い方である</em>ことを念頭に、併用しようという方の参考になれば幸いです。


## 追記


最初のうちは不安定だったのですが、最近は安定して使えています。なぜ安定しだしたのかよく分からないのは気持ち悪いところです。

Surafceのアップデートで安定したのかもしれませんし、たまたまなのかもしれません。そこまで気にしなくてもいいのか、私の環境が偶然安定しているだけなのかはっきりしないのがもどかしいです。
