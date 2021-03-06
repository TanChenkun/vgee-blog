var libs;

console.log(debug);

libs = [];

if (!debug) {
  requirejs.config({
    baseUrl: 'build/js',
    paths: {
      'jquery': '//7mnmwm.com1.z0.glb.clouddn.com/app/scripts/js/lib/jquery.min',
      'angular': '//7mnmwm.com1.z0.glb.clouddn.com/app/scripts/js/lib/angular-route-animate.min',
      'bootstrap': '//7mnmwm.com1.z0.glb.clouddn.com/app/scripts/js/lib/bootstrap.min',
      'markdown': '//7mnmwm.com1.z0.glb.clouddn.com/app/scripts/js/lib/markdown.min',
      'hljs': '//7mnmwm.com1.z0.glb.clouddn.com/app/scripts/js/lib/highlight.pack',
      'config': 'config.min',
      'directive': 'directive.min',
      'controller': 'controller.min',
      'factory': 'factory.min',
      'filter': 'filter.min'
    },
    shim: {
      'angular': {
        exports: 'angular'
      },
      'bootstrap': {
        deps: ['jquery'],
        exports: 'bootstrap'
      },
      'markdown': {
        exports: 'markdown'
      },
      'directive': {
        deps: ['config']
      },
      'controller': {
        deps: ['config']
      },
      'factory': {
        deps: ['config']
      },
      'filter': {
        deps: ['config']
      }
    }
  });
  libs = ['jquery', 'angular', 'bootstrap', 'directive', 'controller', 'factory', 'filter'];
} else {
  requirejs.config({
    baseUrl: 'app/scripts/js',
    paths: {
      'jquery': 'lib/jquery',
      'angular': 'lib/angular',
      'ngRoute': 'lib/angular-ui-router',
      'ngAnimate': 'lib/angular-animate',
      'bootstrap': 'lib/bootstrap',
      'markdown': 'lib/markdown',
      'hljs': 'lib/highlight.pack',
      'config': 'config',
      'directive': 'directive',
      'controller': 'controller',
      'factory': 'factory',
      'filter': 'filter'
    },
    shim: {
      'angular': {
        deps: ['jquery'],
        exports: 'angular'
      },
      'ngRoute': {
        deps: ['angular'],
        exports: 'ngRoute'
      },
      'ngAnimate': {
        deps: ['angular'],
        exports: 'ngAnimate'
      },
      'bootstrap': {
        deps: ['jquery'],
        exports: 'bootstrap'
      },
      'markdown': {
        exports: 'markdown'
      },
      'directive': {
        deps: ['config']
      },
      'controller': {
        deps: ['config']
      },
      'factory': {
        deps: ['config']
      },
      'filter': {
        deps: ['config']
      }
    }
  });
  libs = ['jquery', 'angular', 'ngRoute', 'ngAnimate', 'bootstrap', 'directive', 'controller', 'factory', 'filter'];
}

requirejs(libs, function($, angular) {
  return setTimeout(function() {
    return angular.bootstrap(document, ['myblog']);
  });
});
