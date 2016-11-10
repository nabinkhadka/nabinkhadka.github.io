Ext.define('Personal.website.Footer',{
        extend: 'Ext.panel.Panel',
        layout : {
               type :'hbox',
               align: 'stretch'               
            },
        padding: 10,
        border: false,
        items:  [{
            xtype: 'button',
            glyph: 'xf230@FontAwesome'
          },{
            xtype: 'button',
            glyph: 'xf0e0@FontAwesome'
          },{
            xtype: 'button',
            glyph: 'xf099@FontAwesome'
          },{
            xtype: 'button',
            glyph: 'xf16c@FontAwesome'
          },{
            xtype: 'button',
            glyph: 'xf08c@FontAwesome'
          },{
            xtype: 'button',
            glyph: 'xf17e@FontAwesome'
          }]

      });