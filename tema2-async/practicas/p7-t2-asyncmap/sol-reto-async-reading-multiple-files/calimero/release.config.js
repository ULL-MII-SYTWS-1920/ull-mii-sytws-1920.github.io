module.exports = {
  branch: 'master',
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/changelog', {
        changelogFile: 'CHANGELOG.md'
      }
    ],
    [
      '@semantic-release/npm', {
        npmPublish: false,
        tarballDir: 'npm',
      }
    ],
    [
      '@semantic-release/github', {
        assets: [
          {
            path: 'dist/index.cjs.js',
            label: 'Common JS module'
          },
          {
            path: 'dist/index.esm.js',
            label: 'ES module'
          },
          {
            path: 'dist.zip',
            label: 'Distribution'
          },
          {
            path: 'npm/*.tgz',
            label: 'NPM tarball'
          }
        ]
      }
    ],
    [
      '@semantic-release/git', {
        assets: ['package.json', 'CHANGELOG.md'],
        message:
          'chore(release): ${nextRelease.version} - ${new Date().toDateString()} [skip ci]\n\n${nextRelease.notes}'
      }
    ]
  ]
};
