# Contributing

Thanks for wanting to contribute! We're currently trying to figure most things out before starting the real work, so follow the Issues and let us know if you want a framework to be included!

## Publishing the site

The site is in the `site` folder. It is deployed via Github Pages, and new changes can be deployed with PRs.

### Deployment

1. Run `npm run build` in the `site` directory
2. `git checkout -B gh-pages`
2. `git add -f build`
3. `git commit -m "Rebuild website"`
4. `git push origin :gh-pages`
5. Go back to the root directory and run `git subtree push --prefix site/build origin gh-pages`
6. Run `git checkout -`

Done!
