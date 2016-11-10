Ext.define('Personal.website.LeftNavigation',{
        extend: 'Ext.panel.Panel',
        layout : {
               type :'vbox',
               align: 'stretch'               
            },
        padding: 10,
        items:  [{
            xtype: 'button',
            glyph: 'xf015@FontAwesome',
            text: 'Large',
            scale: 'large'
        },{
            xtype: 'button',
            glyph: 'xf0e0@FontAwesome',
            text: 'Large',
            scale: 'large'
          },{
            xtype: 'button',
            glyph: 'xf19d@FontAwesome',
            text: 'Large',
            scale: 'large'
          },{
            xtype: 'button',
            glyph: 'xf16c@FontAwesome',
            text: 'Large',
            scale: 'large'
          },{
            xtype: 'button',
            glyph: 'xf08c@FontAwesome',
            text: 'Large',
            scale: 'large'
          },{
            xtype: 'button',
            glyph: 'xf17e@FontAwesome',
            text: 'Large',
            scale: 'large'
          }]

      });