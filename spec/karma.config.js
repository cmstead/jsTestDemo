module.exports = function(config){
    config.set({
        basePath: '',

        frameworks: ['jasmine'],

        reporters: ['progress', 'coverage'],

        browsers: ['PhantomJS'],

        files: [
            //Uncomment the following line and change the directory to match your project structure.
            //'../scripts/**/*.js',
            './**/*.spec.js'
        ],

        preprocessors: {
            '../scripts/**/*.js': ['coverage']  //Change this to match your project directory structure
        },

        coverageReporter: {
            //There are lots of different types of coverage reporters, including plugins
            //and built ins, but text-summary is a good place to start.
            type: 'text-summary'
        },

        colors: true,

        autoWatch: false,
        singleRun: true
    });


}