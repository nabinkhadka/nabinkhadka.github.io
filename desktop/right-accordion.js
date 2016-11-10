Ext.define('Personal.website.Accordion',{
  extend: 'Ext.panel.Panel',
  layout: 'accordion',
  items : [
    {
      title : 'Associate Software Engineer',
      html : `<br>...Logpoint Nepal Pvt. Ltd. Jawalakhel. (2016 - Present)<br>Working on ExtJs,
              Flask, MongoDB...<br><br>`
    },{
      title : 'Software Engineer',
      html : `<br>...E & T Nepal Pvt. Ltd. New Road, Kathmandu. (18 months)<br>Worked on Cuda framework. 
              Was working on cuda porting a crash simulation code in collaboration with ESI France.
              Challenge was to parallelize the existing FORTRAN code...<br><br>`
    },{
      title : 'Java Developer',
      html : `<br>...Smart Data Solutions. Kupondle, Kathmandu. (3 months)<br>Learned absolutely nothing at all...
              <br><br>`
    },{
      title : 'Internship',
      html : `<br>...Young Innovations Pvt. Ltd. Kumaripati, Lalitpur (3 months)<br>
              Python and its frameworks (Scrapy for website crawling and Django). Learned Linux
              systems and source code management tools...
              <br><br>`
    },{
      title : 'Engineering',
      html : 'Kathmandu Engineering College<br>Kalimati, Kathmandu. Batch 2010<br>74 %'
    },{
      title : 'School',
      html : 'Mount View English Boarding School<br>Ghorahi, Dang. Batch 2008<br>86 %'
    },{
      title : '10 + 2',
      html : 'Gorkha International College<br>Rabbe, Dang. Batch 2008<br>78 %'
    }]
});