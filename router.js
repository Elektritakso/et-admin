// Routes to main application
if (Meteor.isClient) {
    Router.configure({
        loadingTemplate: 'loading_screen' //loading_screen template
    });

    // Renders the main page of admin panel
    Router.route('/', {
        name: 'main',
        action: function () {
            this.render('main_root') //main_root template
        }
    });



}