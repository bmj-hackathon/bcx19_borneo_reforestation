const boom = require('boom');
/*
Reviewer ignore, for testing and reference only!
*/

let mock_tree_object_rn593z = `{
    "object": "TreeView",
    "id": "rn593z",
    "farmer_id": "tdx6",
    "plot_id": "eag7",
    "project_name": "1mt",
    "survey_id": "sv9flx",
    "dbh_cm": "0.80",
    "height_m": "1.00",
    "height_calculated": false,
    "health": 1,
    "comment": null,
    "timestamp": "2017-11-20T00:00:00+00:00",
    "species": "Sengon",
    "volume": "0.006400000000000000000",
    "point_coords": "113.526220, -1.514462",
    "accuracy": null
  }
`

let mock_tree_object_p9t7q3 = `{
    "object": "TreeView",
    "id": "p9t7q3",
    "farmer_id": "tdx6",
    "plot_id": "eag7",
    "project_name": "1mt",
    "survey_id": "sv9flx",
    "dbh_cm": "0.70",
    "height_m": "0.65",
    "height_calculated": false,
    "health": 1,
    "comment": null,
    "timestamp": "2017-11-20T00:00:00+00:00",
    "species": "Sengon",
    "volume": "0.003640000000000000000",
    "point_coords": "113.525097, -1.514497",
    "accuracy": null
  },
`

let mock_tree_id_list = `{"tree_ids": ["rn593z","p9t7q3"]}`

var exported = {
    
    getTrees: function getTrees(request, h) {
        // console.log(request.query.params);
        
        var tree_id = encodeURIComponent(request.query.tree_id)
        console.log(`Tree id: ${tree_id}`);
        if (tree_id === 'undefined') {
            data = JSON.parse(mock_tree_id_list)
            return data;
        } else if (tree_id === 'rn593z') {
            data = JSON.parse(mock_tree_object_rn593z)
            return data;
        } else if (tree_id === 'p9t7q3') {
            data = JSON.parse(mock_tree_object_p9t7q3)
            return data;
        }  else {
            return boom.badRequest(`tree_id '${tree_id}' not found`); 
        }
    },


    helloGreetUser: function helloGreetUser(request, h) {
        // console.log(request.payload);
        // console.log(JSON.stringify(request.payload));
        var usr = encodeURIComponent(request.params.user)
        return `hello ${usr}`;
    },


    helloNumberIndex: function helloNumberIndex(request, h) {
        // console.log(request.payload);
        // console.log(JSON.stringify(request.payload));
        var idx = encodeURIComponent(request.params.index)
        return `hello ${idx}`;
    },
}
module.exports = exported