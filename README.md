# Redmine theme for kids midori version / Kodomo Redmine green version

Redmine theme for kids and children **green** version.

I created this theme inspired by [JIRA Jr.](https://www.atlassian.com/jirajr) and [various WordPress themes for kids and children](https://www.theme-junkie.com/best-wordpress-themes-for-kids-and-children/).

This theme is still experimental, but I hope to provide a more friendly Redmine with bright colors and fun fonts.

If you are interested, try creating a theme for kids and different generations!

<!-- TOC depthFrom:2 orderedList:false -->

- [Screen shot](#screen-shot)
  - [PC](#pc)
  - [Responsive](#responsive)
  - [News](#news)
  - [Message / Forum](#message--forum)
- [Installation](#installation)
- [docker-compose](#docker-compose)
- [Customize theme](#customize-theme)
- [Contributions](#contributions)
- [for Japanese Users](#for-japanese-users)
  - [このテーマについて](#このテーマについて)
  - [テーマへのご意見 / ご協力について](#テーマへのご意見--ご協力について)
  - [Webフォントについて](#webフォントについて)
    - [配布サイト](#配布サイト)
    - [利用フォント](#利用フォント)
  - [配置方法](#配置方法)
    - [テーマのみの配置](#テーマのみの配置)
    - [メッセージのカスタマイズ](#メッセージのカスタマイズ)
  - [おためし用Dockerfile](#おためし用dockerfile)
- [テーマのカスタマイズ](#テーマのカスタマイズ)
- [Special Thanks](#special-thanks)
- [ChangeLog](#changelog)

<!-- /TOC -->

## Screen shot

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

## docker-compose

You can try this theme via Docker.

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

### Webフォントについて

こちらのテーマでは、以下のフォントを利用させていただいております。ありがとうございます！

#### 配布サイト

- あんずいろapricot×color
 - 配布サイトURL: <http://www8.plala.or.jp/p_dolce/index.html>
 - 作成者：京風子（Kyoko）さま
- Google fomts - Patrick Hand
 - Designer: Patrick Wagesreiter

#### 利用フォント

- あんずもじ
- あんずもじ等幅
- Google fomts - Patrick Hand
  - <https://fonts.google.com/specimen/Patrick+Hand>
  - License: SIL Open Font License (OFL)

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

```bash
# build image
docker build -t redmine_theme_kodomo_midori_container:latest .

# run container
docker run --rm -d -p 3000:3000/tcp redmine_theme_kodomo_midori_container:latest
```

コンテナを起動後、アカウント:admin / パスワード: admin でログインできます。

## テーマのカスタマイズ

粗いCSSですが、ソースを見ていただくとどのあたりを修正しているかがわかるかと思います。
また、theme.js を修正することで、プラグイン形式にしなくても、簡単なコンテンツの差込なども可能です。
画像やフォント、メッセージを調整してみてください！

## Special Thanks

- Redmine.org - <https://redmine.org/>
- Japanese Redmine Community - <http://redmine.jp/community/>

## ChangeLog

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
