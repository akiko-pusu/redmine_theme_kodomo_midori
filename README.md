# Redmine theme for kids midori version / Kodomo Redmine green version

Redmine theme for kids and children **green** version.

I created this theme inspired by [JIRA Jr.](https://www.atlassian.com/jirajr) and [various WordPress themes for kids and children](https://www.theme-junkie.com/best-wordpress-themes-for-kids-and-children/).

This theme is still experimental, but I hope to provide a more friendly Redmine with bright colors and fun fonts.

If you are interested, try creating a theme for kids and different generations!

- [Screen shot](#screen-shot)
  - [PC](#pc)
  - [Responsive](#responsive)
  - [News](#news)
  - [Message / Forum](#message--forum)
- [Installation](#installation)
- [Evaluate with docker image on DockerHub](#evaluate-with-docker-image-on-dockerhub)
- [docker-compose](#docker-compose)
- [Customize theme](#customize-theme)
- [Fonts](#fonts)
- [Contributions](#contributions)
- [for Japanese Users](#for-japanese-users)
  - [このテーマについて](#このテーマについて)
  - [テーマへのご意見 / ご協力について](#テーマへのご意見--ご協力について)
  - [利用しているフォントについて](#利用しているフォントについて)
    - [きろ字のご利用について](#きろ字のご利用について)
      - [きろ字情報](#きろ字情報)
    - [あんずもじのご利用について](#あんずもじのご利用について)
      - [配布サイト](#配布サイト)
      - [配置手順](#配置手順)
  - [配置方法](#配置方法)
    - [テーマのみの配置](#テーマのみの配置)
    - [メッセージのカスタマイズ](#メッセージのカスタマイズ)
  - [おためし用Dockerfile](#おためし用dockerfile)
    - [ローカルで直にビルドして起動する場合](#ローカルで直にビルドして起動する場合)
    - [テーマを編集開発しながら起動する場合](#テーマを編集開発しながら起動する場合)
- [テーマのカスタマイズ](#テーマのカスタマイズ)
- [Special Thanks](#special-thanks)
- [ChangeLog](#changelog)

## Screen shot

NOTE: Following samples are using 'Patrick Hand', 'Anzu' (as Japanese font).

### PC
<img src='images/screenshot-pc.png' width='500' title='PC version'>

### Responsive

<img src='images/screenshot-sp.png' width='500' title='Mobile version'>

### News

<img src='images/screenshot-news.png' width='400' title='News'>

### Message / Forum

<img src='images/screenshot-messages.png' width='400'>

## Installation

- Download zip file from release page
- Extract zip file, and move to public/themes/redmine_theme_kodomo_midori at Redmine directory
- Open Redmine page, and go to Administration > Settings > Display
- Enable the redmine_theme_kodomo_midori from Theme, and save settings

## Evaluate with docker image on DockerHub

You can try this theme using docker image on DockerHub.

<https://hub.docker.com/repository/docker/akiko/redmine_theme_kodomo_midori>

```bash
docker pull akiko/redmine_theme_kodomo_midori

# run redmine localy and enabled to access via port 3000
docker run --rm --name kodomo_redmine -p 3000:3000 -it akiko/redmine_theme_kodomo_midori:latest
```

Just after access to Redmine (http://localhost:3000), you can log in to the Redmine using username: admin /password: admin.

## docker-compose

You can try and edit this theme via docker compose.

- git clone https://github.com/akiko-pusu/redmine_theme_kodomo_midori
- cd redmine_theme_kodomo_midori
- ``docker-compose build --no-cache``
- ``docker-compose up -d``
- Access to http://localhost:3000/ on web browser
- Sign in to Redmine as an administrator (account: admin / password: admin)
- Select the theme from the administration screen.
- Stop is docker-compose stop.

---

## Customize theme

You can also customize this theme under dockerenvironment.
Please edit stylesheets/application.cs, stylesheets/responsive.css and javascripts/theme.js.

## Fonts

The basic font is the Google font "Patrick Hand". So that a handwriting style is applied to the text.
You can customize the font to your liking by modifying the CSS.

## Contributions

I tried to make it for elementary and junior high school students, but it doesn't cover all the functions of Redmine, and there are still a lot of things that are not styled to look good.

Also, I personally think that if children and students use it in multiples, it would be more useful to function as a content management system, such as forums, wikis and news, than ticket tracking.

If you think it's practical or you want to make it more durable, I'd love it if you could raise an issue or pull request for improvements.

If the theme alone doesn't cover enough, I'm looking at simple JavaScript tweaks and development in conjunction with plugins, so please give me your opinion.

---

## for Japanese Users

### このテーマについて

[JIRA Jr.](https://www.atlassian.com/jirajr) や [various WordPress themes for kids and children](https://www.theme-junkie.com/best-wordpress-themes-for-kids-and-children/) を参考に、小中学生向け、もしくはやわらかい感じのテーマがほしいなと思って作成しました。

ベースは[Kodomo Redmine](https://github.com/akiko-pusu/redmine_theme_kodomo) を利用し、色味を緑ベースに変えています。

### テーマへのご意見 / ご協力について

小中学生向け、という趣旨で作ってみましたが、Redmineの全ての機能をカバーしているわけではなく、まだまだ見た目的にもスタイルが整っていないところがたくさんあります。

また、子どもたちや学生が複数で利用する場合、チケットトラッキングよりも、フォーラムやWiki、ニュースといったコンテンツマネジメントシステムとしての機能が役に立つと個人的に思っています。

実用に耐えそう、もしくは耐えるものにしてみたいと言う方は、ぜひ、足りない部分や改善点をissueやプルリクエストで上げていただけたら嬉しいです。

テーマだけではカバーし切れていない部分は、簡単なJavaScriptでの調整や、プラグインと連携しての開発なども視野に入れていますので、ご意見のほどよろしくお願いいたします。

### 利用しているフォントについて

こちらのテーマでは、以下のフォントの利用を想定しています。
日本語に関しては、「きろ字 / Kosugi Maru / あんずもじ」の利用を想定してのデザインになっております。
お手数をおかけしますが、各自お手元でのフォントのダウンロードをお願いいたします。

**英語**

- Google fonts - [Patrick Hand](https://fonts.google.com/specimen/Patrick+Hand)
 - Designer: Patrick Wagesreiter
 - License: [Open Font License](https://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL)
 - https://fonts.google.com/specimen/Patrick+Hand

**日本語**

- きろ字
  - New BSDライセンスに基づくきろ字をメインのフォントとして利用させていただきます
  - https://ola.kironono.com/entry/fonts-kiloji
  - フォントが組み込まれない場合は、デフォルトの日本語フォントが利用されます
- Google fonts - [Kosugi Maru](https://fonts.google.com/specimen/Kosugi+Maru) (as 'Kosugi Maru')
  - Designer: MOTOYA
  - License: [Open Font License](https://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL)
  - https://fonts.google.com/specimen/Kosugi+Maru
- あんずもじ
  - あんずもじに関しては、各自でのダウンロードと配置をお願いします
  - フォントが組み込まれない場合は、デフォルトの日本語フォントが利用されます

#### きろ字のご利用について

New BSDライセンスで利用可能な「きろ字」をメインのフォントとして利用させていただききました。
ttfからwoffへ変換して利用としております。

##### きろ字情報

- 手書き風総合書体「きろ字」
 - 詳細情報: <https://ola.kironono.com/entry/fonts-kiloji>
 - 作成者: kilo さま

```
% tree font
font
└── kiloji
    ├── License.txt
    ├── kiloji.ttf
    ├── kiloji.woff
    ├── kiloji_b.ttf
    └── kiloji_b.woff

1 directory, 5 files
```

標準フォント、Google fontでのご利用に切り替えたい場合は、以下の方法でfonts.cssを調節してください。

#### あんずもじのご利用について

大変可愛らしい文字ですので、もしお手元でご利用の際に組み込み可能でしたら、是非ご利用してみてください！
あんずもじを利用するに当たって、以下の通りにお願いいたします。

##### 配布サイト

- あんずいろapricot×color
 - 配布サイトURL: <http://www8.plala.or.jp/p_dolce/index.html>
 - 作成者: 京風子（Kyoko）さま

##### 配置手順

- 配布サイトURL: <http://www8.plala.or.jp/p_dolce/index.html> からフォントのダウンロードをお願いします
  - あんずもじ
  - あんずもじ等幅
- font というディレクトリに、以下のように配置をお願いします

```bash

$ tree font
font
├── APJapanesefont.ttf
└── APJapanesefontT.ttf

```

- フォントはfonts.css に記載と同じとなります
- fonts.css の設定で、'Patrick Hand' の後に 'anzu' を指定して下さい
  - 例: ``font-family: 'Patrick Hand', 'anzu', 'kiroji_b', 'Kosugi Maru'``
- 配置の上でRedmineの再起動をお願いいたします

### 配置方法

#### テーマのみの配置

- Redmineのディレクトリ/public/themes/ 以下に展開します
- 配置後にRedmineを再起動します

参考: Redmineのディレクトリ/public/themes/ 以下

```bash
$ tree -L 1
.
├── README
├── alternate
├── classic
└── redmine_theme_kodomo_midori

3 directories, 1 file
```

#### メッセージのカスタマイズ

このテーマ単体では、現在こども用のメニュー、ラベルには対応していません。

子ども向けにメッセージをカスタマイズする場合は、``redmine_message_customize`` プラグインなどを使うことを想定しています。

- <https://github.com/ishikawa999/redmine_message_customize.git>

### おためし用Dockerfile

このリポジトリの直下にDockerfileがありますので、簡単な確認が可能です。

#### ローカルで直にビルドして起動する場合

```bash
# build image
docker build -t redmine_theme_kodomo_midori_container:latest .

# run container
docker run --rm -d -p 3000:3000/tcp redmine_theme_kodomo_midori_container:latest
```

コンテナを起動後、アカウント:admin / パスワード: admin でログインできます。

#### テーマを編集開発しながら起動する場合

```bash
git clone https://github.com/akiko-pusu/redmine_theme_kodomo_midori
cd redmine_theme_kodomo_midori
docker-compose build --no-cache
docker-compose up -d
```

上記で、テーマが適用された状態でRedmineが起動します。
http://localhost:3000/ にアクセスしてください。

また、該当のディレクトリで、直にCSS, JavaScriptを編集しつつ、動作確認ができます。


## テーマのカスタマイズ

粗いCSSですが、ソースを見ていただくとどのあたりを修正しているかがわかるかと思います。
また、theme.js を修正することで、プラグイン形式にしなくても、簡単なコンテンツの差込なども可能です。
画像やフォント、メッセージを調整してみてください！

## Special Thanks

- Redmine.org - <https://redmine.org/>
- Japanese Redmine Community - <http://redmine.jp/community/>
- Font developers

## ChangeLog

- 0.0.7
  - Update README.
  - Use kiloji as Japanese font.
  - Update style for administration.
  - Some css Change.
- 0.0.6
  - Update README.
  - Change the way to import fonts via webfonts.
  - Add description to store and use Anzu font.
  - Some css Change.
- 0.0.5
  - Update README.
  - Change Japanese font.
- 0.0.4
  - Changelogin form.
  - Add theme information on footer.
  - Show theme info at welcome /login page via hover.
  - Adjust some styles.
- 0.0.3
  - Apply style: News and Forum
  - Update docker files. (Thanks @TomonoriMatsumura)
- 0.0.2
  - Style update.
  - Change to use **Patrick Hand** as default font.
- First Release: 0.0.1
