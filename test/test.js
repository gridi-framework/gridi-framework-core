var path = require('path');
var sassTrue = require('sass-true');

//Test functions
sassTrue.runSass({file: path.join(__dirname, 'functions/map.scss')}, describe, it);
sassTrue.runSass({file: path.join(__dirname, 'functions/colors.scss')}, describe, it);
sassTrue.runSass({file: path.join(__dirname, 'functions/screens.scss')}, describe, it);

//Test css3 mixins
sassTrue.runSass({file: path.join(__dirname, 'mixins/css3/property.scss')}, describe, it);

//Test helpers mixins
sassTrue.runSass({file: path.join(__dirname, 'mixins/helpers/property.scss')}, describe, it);
sassTrue.runSass({file: path.join(__dirname, 'mixins/helpers/margin.scss')}, describe, it);
sassTrue.runSass({file: path.join(__dirname, 'mixins/helpers/outline.scss')}, describe, it);
sassTrue.runSass({file: path.join(__dirname, 'mixins/helpers/border.scss')}, describe, it);
sassTrue.runSass({file: path.join(__dirname, 'mixins/helpers/background.scss')}, describe, it);
sassTrue.runSass({file: path.join(__dirname, 'mixins/helpers/padding.scss')}, describe, it);
sassTrue.runSass({file: path.join(__dirname, 'mixins/helpers/font.scss')}, describe, it);

sassTrue.runSass({file: path.join(__dirname, 'mixins/helpers/animation.scss')}, describe, it);
sassTrue.runSass({file: path.join(__dirname, 'mixins/helpers/transition.scss')}, describe, it);