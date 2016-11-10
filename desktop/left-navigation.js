Ext.define('Personal.website.LeftNavigation',{
        extend: 'Ext.panel.Panel',
        layout : {
               type :'vbox',
               align: 'stretch'               
            },
        padding: 10,
        items:  [{
            xtype: 'button',
            glyph: 'xf002@FontAwesome',
            text: 'Large',
            scale: 'large',
            iconAlign: 'left'
        },{
          xtype: 'button',
            iconCls: 'button-home-large',
            text: 'Large',
            scale: 'large',
            iconAlign: 'right'
          },{
            xtype: 'button',
            iconCls: 'button-home-large',
            text: 'Large',
            scale: 'large',
            iconAlign: 'right'
          },{
            xtype: 'button',
            iconCls: 'button-home-large',
            text: 'Large',
            scale: 'large',
            iconAlign: 'right'
          }]

      });