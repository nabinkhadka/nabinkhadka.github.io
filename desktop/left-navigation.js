Ext.define('Personal.website.LeftNavigation',{
        extend: 'Ext.panel.Panel',
        layout : {
               type :'vbox',
               align: 'stretch'               
            },
        padding: 10,
        items:  [{
            xtype: 'button',
            glyph: 'xf17b@FontAwesome',
            text: 'Project 1',
            align: 'left',
            scale: 'large'
        },{
            xtype: 'button',
            glyph: 'xf17b@FontAwesome',
            text: 'Project 2',
            scale: 'large'
          },{
            xtype: 'button',
            glyph: 'xf17b@FontAwesome',
            text: 'Project 3',
            scale: 'large'
          },{
            xtype: 'button',
            glyph: 'xf17b@FontAwesome',
            text: 'Project 4',
            scale: 'large'
          },{
            xtype: 'button',
            glyph: 'xf17b@FontAwesome',
            text: 'Project 5',
            scale: 'large'
          },{
            xtype: 'button',
            glyph: 'xf17b@FontAwesome',
            text: 'Project 6',
            scale: 'large'
          }]

      });