#!/bin/sh
# index.html i roten er kilden til artefakten «HUB Prosjektrom» og mangler <head>.
# Her pakkes den inn i et fullt HTML-dokument for Cloudflare.
set -e
cd "$(dirname "$0")/.."
{
  cat <<'HEAD'
<!doctype html>
<html lang="nb">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<style>:root{box-sizing:border-box;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}body{margin:0}img{max-width:100%}[hidden]{display:none!important}</style>
</head>
<body>
HEAD
  cat index.html
  printf '\n</body>\n</html>\n'
} > public/index.html
echo "Bygget public/index.html"
