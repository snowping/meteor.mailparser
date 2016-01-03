var MailParserVersion = '0.5.3';

Package.describe({
  name: 'snowping:mailparser',
  version: MailParserVersion + '_1',
  summary: 'Wrapper for npm module mailparser',
  git: 'https://github.com/snowping/meteor.mailparser.git',
  documentation: 'README.md'
});

//NPM module dependencies
Npm.depends({
   'mailparser': MailParserVersion
});

Package.onUse(function(api) {
  api.export('MailParser', 'server');
  api.addFiles('mailparser.js', 'server')
});

