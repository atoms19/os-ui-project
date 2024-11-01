/* js is complicated to understand since it is using dominity 😐 */

/*design copyrights @
©©©©©©©©©atoms19 */
 
/*alert("this will be my last code on sl 👋, moving away from webdev for now")
avoid random nonsensical comments
*/

import {div,section,header,span,state,$el,iframe} from "https://esm.sh/dominity@latest"


let iter=0

class AppWindow{
    
    constructor(obj){
    if(obj!=undefined){
    
        if(obj.width!=undefined){
            this.width=obj.width
        }else{
            this.width="70%"
        }
        
        if(obj.height!=undefined){
            this.height=obj.height
        }else{
            this.height="300px"
        }
        
        if(obj.x!=undefined){
            this.x=obj.x
        }else{
            this.x=20+"px"
        }
        
        if(obj.y!=undefined){
            this.y=obj.y
        }else{
            this.y=20+"px"
        }
        
        if(obj.maxWidth!=undefined){
            this.maxWidth=obj.maxWidth
        }else{
            this.maxWidth="100%"
        }
        
        if(obj.maxHeight!=undefined){
            this.maxHeight=obj.maxHeight
        }else{
            this.maxHeight=""
        }
        
        if(obj.title!=undefined){
            this.title=obj.title
        }else{
            this.title="new window"
        }

        if(obj.source!=undefined){
            this.source=obj.source
        }else{
            this.source=undefined
        }
        
        if(obj.fullScreen!=undefined){
            this.fullScreen=obj.fullScrern
        }else{
            this.fullScreen=false
        }
        
        }
        }
        
        create(){



this.app=state(null)
this.nav=state(null)
this.content=state(null)

            section({class:'app'},
                header({class:'app-head'}, 
                    div({class:'left'},
                    div({class:'app-title'},this.title)
                ),
                div({class:'right'},
                    span({class:'app-btn'}).on("click",()=>{
                        if(!this.fullScreen){
                                 this.maximize()
                             }else if(this.fullScreen){
                                 this.minimize()
                             }
                             }),
                    span({class:'app-btn'}),
                    span({class:'app-btn'}).on("click",()=>{
                        this.close()
                    })
                )
            
            ).giveRef(this.nav,0).on("touchstart",()=>{
                this.app.value.css("zIndex","500")
              }).on("drag",(e)=>{

                if(!this.fullScreen){
                    this.app.value.css({
                        top:e.clientY+"px",
                              left:e.clientX-(parseInt(this.nav.value.css("width"))/2)+"px"
                    })
                    
                    if(e.clientY<0){
                        this.maximize()
                    }
                    
                    if( e.clientY+(parseInt(this.app.value.css("height"))/2)+10>window.innerHeight-parseInt($el(".taskbar").css("height"))){
                        this.close()
                    }
                    
                    
                  }else{
                      if(e.clientY>0){
                        this.minimize()
                    }
                    
                  }

              }).on("touchmove",(e)=>{

                if(!this.fullScreen){
                          this.app.value.css({
                              top:e.touches[0].clientY+"px",
                                    left:e.touches[0].clientX-(parseInt(this.nav.value.css("width"))/2)+"px"
                          })
                          
                          if(e.touches[0].clientY<0){
                              this.maximize()
                          }
                          
                          if( e.touches[0].clientY+(parseInt(this.app.value.css("height"))/2)+10>window.innerHeight-parseInt($el(".taskbar").css("height"))){
                              this.close()
                          }
                          
                          
                        }else{
                            if(e.touches[0].clientY>0){
                              this.minimize()
                          }
                          
                        }
                          
                        }
                        ).on("touchend",()=>{
                            this.app.value.css("zIndex",2+iter+"")
                            iter+=1
                          })
                          ,
iframe({class:'app-content',src:this.source},

).giveRef(this.content,0)
                
            ).giveRef(this.app,0)

   
        
   
        
        console.log(this.app)
        this.app.value.css({
            top:this.y+"",
            left:this.x+""
        })
             
        
        }
        
        close(){
            this.app.value.css({
                animation:"closeAnim 0.5s forwards"
            })
            
            setTimeout(()=>{
                this.app.value.remove()
                
            },500)
        }
        
        
        maximize(){
        
       this.app.value.css({
                animation:"scaleAnim 0.25s"
            })
            
            setTimeout(()=>{
                this.maxHeight=window.innerHeight-parseInt(this.nav.value.css("height"))+"px"
    
    this.app.value.css({
        width:this.maxWidth 
        ,top:"0"
        ,left:"0"
        ,borderRadius:"0px"
        
    })
    
    this.content.value.css({
        height:this.maxHeight
    })
    
    this.sizeBtn.value.style("background","var(--warning)")
    
    this.fullScreen=true
                
            },250) 
        }
        
        minimize(){
        
        this.app.css({
                animation:"scaleAnimR 0.25s"
            })
            
            setTimeout(()=>{
                this.app.value.css({
     width:this.width,
     left:this.x,
     top:this.y
     ,borderRadius:"0.5rem"
 }).child(1).css({
     height:this.height,
     
 })    
 
 this.sizeBtn.css("background","var(--success)")
    
 
 this.fullScreen=false
                
            },250)
        
            
        
        }
        
    
    
    
}

let sources=[{
    title:'atoms',
    source:'https://atoms19.vercel.app'},{title:'browser',source:'https://brogser.vercel.app'},{title:'dominity',source:'https://dominity.vercel.app'}]
for(let i=0;i<4;i++){  

let data=sources[Math.floor(Math.random()*sources.length)]

    new AppWindow({
x:Math.floor(Math.random()*(40/100*window.innerWidth))+"px",
y:Math.floor(Math.random()*50/100*window.innerHeight,0)+"px",
title:data.title,
source:data.source
}
    ).create()
   let dt=new Date()
    
    
   let currentTime=dt.getHours()+":"+dt.getMinutes()+"am"
   
   if(dt.getHours()>12){
       currentTime=(dt.getHours()-12)+":"+dt.getMinutes()+"pm"
   }
    
   setInterval(()=>{
//    new finder("#time").txt(
//        currentTime
//    )
   
   
   },1000)



}

// homeOpened=false
// quicktoolsOpened=false
// new finder("#home-btn").checkFor("click",toggleHome)

// new finder("#quick-btn").checkFor("click",toggleQuicktools)





// function toggleHome(){
    
// if(!homeOpened){
//     new finder(".home").style({
//         transform:"translateY(0)"
//     })
//     homeOpened=true
    
    
// }else{
//     new finder(".home").style({
//         transform:"translateY(150%)"
//     })
//     homeOpened=false
    
    
// }

// }

// function toggleQuicktools(){
    
// if(!quicktoolsOpened){
//     new finder(".quicktools").style({
//         transform:"translateY(0) translateX(50%)"
//     })
//     quicktoolsOpened=true
    
    
// }else{
//     new finder(".quicktools").style({
//         transform:"translateY(150%) translateX(50%)"
//     })
//     quicktoolsOpened=false
    
    
// }

// }






// // finder.prototype.checkHold=function(timeout,callback){
// //     this.isHolding=false
// //     this.checkFor("touchstart",()=>{
// //         this.isHolding=true
// //         this.timeoutId=setTimeout(()=>{
// //             if(this.isHolding){
// //                 callback()
// //             }
// //         },timeout)
// //     })
    
// //     this.checkFor("touchend",()=>{
// //         this.isHolding=false
// //         clearTimeout(this.timeOutId)
// //     })
// // }