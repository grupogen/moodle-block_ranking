M.block_ranking = {
    inittabview: function(Y) {
        Y.use("tabview", function(Y) {
            var tabview = new Y.TabView({srcNode: '#ranking-tabs'});
            tabview.render();
        });
    }
};
