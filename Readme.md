## Status quo

Finding out which searXNG instances exist is easily possible via https://searx.space/

## Goal

Finding out for how long they exist is harder.
I aggregated data from archive.org get that information. 

## Where to get the json files?

I got them via https://web.archive.org/web/20230801000000*/https://searx.space/data/instances.json (for each year, one file for june and december)..

## Output

The 1st value is the instance URL, the 2nd value is the age of the instance (in years) going back from september 2023, rounded to 0.25 steps.

```
[
  [ 'https://searx.fmac.xyz/', 3 ],
  [ 'https://search.mdosch.de/', 2.75 ],
  [ 'https://searx.prvcy.eu/', 2.5 ],
  [ 'https://searx.tuxcloud.net/', 2.5 ],
  [ 'https://searx.be/', 2.25 ],
  [ 'https://searx.ru/', 2.25 ],
  [ 'https://northboot.xyz/', 2 ],
  [ 'https://searx.divided-by-zero.eu/', 2 ],
  [ 'https://searx.tiekoetter.com/', 1.75 ],
  [ 'https://search.bus-hit.me/', 1.5 ],
  [ 'https://searx.mha.fi/', 1.5 ],
  [ 'https://search.ononoki.org/', 1.5 ],
  [ 'https://searx.namejeff.xyz/', 1.25 ],
  [ 'https://search.rabbit-company.com/', 1.25 ],
  [ 'https://search.rowie.at/', 1 ],
  [ 'https://searx.mastodontech.de/', 1 ],
  [ 'https://searx.dresden.network/', 1 ],
  [ 'https://xo.wtf/', 1 ],
  [ 'https://searx.ericaftereric.top/', 1 ],
  [ 'https://searx.baczek.me/', 1 ],
  [ 'https://search.sapti.me/', 1 ],
  [ 'https://search.zzls.xyz/', 1 ],
  [ 'https://search.rhscz.eu/', 0.75 ],
  [ 'https://searx.catfluori.de/', 0.75 ],
  [ 'https://searx.cthd.icu/', 0.75 ],
  [ 'https://search.smnz.de/', 0.75 ],
  [ 'https://search.gcomm.ch/', 0.75 ],
  [ 'https://search.us.projectsegfau.lt/', 0.75 ],
  [ 'https://searx.work/', 0.5 ],
  [ 'https://search.cronobox.one/', 0.5 ],
  [ 'https://baresearch.org/', 0.5 ],
  [ 'https://searx.si/', 0.5 ],
  [ 'https://darmarit.org/searx/', 0.5 ],
  [ 'https://search.modalogi.com/', 0.5 ],
  [ 'https://searx.kutay.dev/', 0.5 ],
  [ 'https://search.leptons.xyz/', 0.5 ],
  [ 'https://freesearch.club/', 0.25 ],
  [ 'https://search.citw.lgbt/', 0.25 ],
  [ 'https://searx.doofpot.nl/', 0.25 ],
  [ 'https://search.im-in.space/', 0.25 ],
  [ 'https://search.laksith.dev/', 0.25 ],
  [ 'https://search.demoniak.ch/', 0 ],
  [ 'https://searx.daetalytica.io/', 0 ],
  [ 'https://searxng.online/', 0 ],
  [ 'https://search.fawkesguy.com/', 0 ],
  [ 'https://search.lvkaszus.pl/', 0 ],
  [ 'https://search.ovh/', 0 ],
  [ 'https://searx.headpat.exchange/', 0 ],
  [ 'https://search.kokomo.cloud/', 0 ],
  [ 'https://searxng.se/', 0 ],
  [ 'https://searxng.xcxc.eu/', 0 ],
  [ 'https://searx.bissisoft.com/', 0 ],
  [ 'https://searxng.ch/', 0 ],
  [ 'https://searx.zhenyapav.com/', 0 ],
  [ 'https://searx.perennialte.ch/', 0 ],
  [ 'https://searx.ox2.fr/', 0 ]
]
```