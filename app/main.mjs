import { router, x } from './modules/jsnode.mjs';

router.on('/dashboard', function(request, stream) {
  stream.render('dashboard', request.data, function(err){
    if(err){return stream.renderErr();}
  })
})
.on('/works', function(request, stream) {
  stream.render('works', request.data, function(err){
    if(err){return stream.renderErr();}
  })
})
.on('/links', function(request, stream) {
  stream.render('links', request.data, function(err){
    if(err){return stream.renderErr();}
  })
})
.on('/animations', function(request, stream) {
  stream.render('animations', request.data, function(err){
    if(err){return stream.renderErr();}
  })
})
.on('/about', function(request, stream) {
  stream.render('about', request.data, function(err){
    if(err){return stream.renderErr();}
  })
})
.on('/blog', function(request, stream) {
  stream.render('blog', request.data, function(err){
    if(err){return stream.renderErr();}
  })
})
.on('/resume', function(request, stream) {
  stream.render('resume', request.data, function(err){
    if(err){return stream.renderErr();}
  })
})
.on('/skills', function(request, stream) {
  stream.render('skills', request.data, function(err){
    if(err){return stream.renderErr();}
  })
})
.on('/contact', function(request, stream) {
  stream.render('contact', request.data, function(err){
    if(err){return stream.renderErr();}
  })
})
.on('/error', function(request, stream) {
  stream.render('error', request.data, function(err){
    if(err){return console.error(err)}
  })
})
.init().listen().validate();
