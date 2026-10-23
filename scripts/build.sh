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
  # Lenkene til artefaktene byttes ut med undersidene som ligger i public/.
  sed -e 's#https://claude.ai/artifact/VshqSEojTsJaDTS2HTKBAg#nettside/#' \
      -e 's#https://claude.ai/artifact/4QvPFZmWr2BGTNR1iHmEKm#venteliste/#' \
      -e 's#https://claude.ai/artifact/TME1bcjHSBa3e8zzyc7uTP#undersokelse/#' \
      -e 's#https://claude.ai/artifact/RHu4QoUZh7tr97v46xsQb6#rombestilling/#' \
      -e 's#https://claude.ai/artifact/3Cdux1irCS9REqwxadgxKg#forretningsplan/#' \
      -e 's#https://claude.ai/artifact/SwNBp77qfbgR2o3JEsHFYN#pitch/#' \
      -e 's#https://claude.ai/artifact/2s11nGqnJBAuCAVLZPa4AP#merkevarehjul/#' \
      -e 's#https://claude.ai/artifact/V8ddTPpJp8EihrKYyC8Mo7#designsystem/#' \
      -e 's# target="_blank" rel="noopener"##' \
      index.html
  printf '\n</body>\n</html>\n'
} > public/index.html
echo "Bygget public/index.html"
