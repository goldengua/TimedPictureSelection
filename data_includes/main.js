PennController.ResetPrefix(null); // Initiates PennController
AddHost("https://github.com/goldengua/TimedPictureSelection/tree/master/chunk_includes/");
// Start typing your code here
 // Initiates PennController

// Start typing your code here

Sequence( "welcome" , randomize("experiment") , "send" , "final" )
newTrial( "welcome" ,
    defaultText
        .print()
    ,
    newText("<p>Welcome!</p>")
    ,
    newText("<p>In this experiment, you will first see four different kinds of aliens. </p>")
    ,
    newText("<p>Press <strong> [w] [a] [s] [d] </strong>to catch these aliens as quickly as possible.</p>")
    ,
    newText("<p>For the <strong>green</strong> alien, press <strong>[w]</strong>; for <strong>blue</strong>, press <strong>[a]</strong>; </p>")
    ,
    newText("<p>for <strong>pink</strong>, press <strong>[s]</strong>; for <strong>yellow</strong>, press <strong>[d]</strong>. </p>")
    ,
    newText("<p>Please get yourself familiar with the action required for catching aliens. </p>")
    ,
    newText("<p>Please enter your ID and then click the button below to start the experiment.</p>")
    ,
    newImage("1","alien1.png")
         .size(100,100)
    ,
    newImage("2","alien2.png")
         .size(100,100)
    ,
    newImage("3","alien3.png")
         .size(100,100)
    ,
    newImage("4","alien4.png")
         .size(100,100)
    ,
    newCanvas(200,200)
         .add(   0 , 0 , getImage("1") )
         .add(   100 , 0 , getImage("2") )
         .add(   0 , 100 , getImage("3") )
         .add(   100 , 100 , getImage("4") )
         .print()
    ,
    newTextInput("inputID")
        .print()
    ,
    newButton("Start")
        .print()
        .wait()
    ,
    newVar("ID")
        .global()
        .set( getTextInput("inputID") )
)
.log( "ID" , getVar("ID") )
Template( variable =>
    newTrial( "experiment" ,
    newAudio('bgm',"drumloop_65.wav")
        .play()
    ,
    newText("fixation",'+')
        .print()
    ,

    newTimer("wait", 800)
        .start()
        .wait()
    ,

    getText('fixation')
        .remove()
    ,
    newImage("gesture_key","alien1.png")
        .size(100,100)
    ,

    //first position
    newAudio("tone", variable.AudioFile)
        .play()
    ,
    newCanvas("alien",300,300)
        .add(   variable.P1x , variable.P1y , newImage("alien1.png").size(100,100) )
        .print()
    ,
    newTimer("wait", 500)
        .start()
        .wait()
    ,
    getCanvas("alien")
        .remove()
    ,
    //second position
    newAudio("tone", variable.AudioFile)
        .play()
    ,
    newCanvas("alien",300,300)
        .add(   variable.P2x , variable.P2y , newImage("alien1.png").size(100,100) )
        .print()
    ,
    newTimer("wait", 500)
        .start()
        .wait()
    ,  
    getCanvas("alien")
        .remove()
    ,
             
    //third canvas 
    newAudio("tone", variable.AudioFile)
        .play()
    ,
    newCanvas("alien",300,300)
        .add(   variable.P3x , variable.P3y , newImage("alien1.png").size(100,100) )
        .print()
    ,
    newTimer("wait", 500)
        .start()
        .wait()
    ,  
    getCanvas("alien")
        .remove()
    ,
//get response
    newKey('response',"wasd")
        .log()
        .wait()
    ,

   getKey("response")
       .test.pressed(variable.key)
       .success( newAudio("success", "success.wav").play() )
       .failure( newAudio("failure", "failure.wav").play(), newText(variable.key).bold().center().color("red").settings.css("font-size", "400%").print() )
    ,
   newCanvas("alien",300,300)
        .add(   variable.P1x , variable.P1y , getImage("gesture_key") )
        .add(   variable.P2x , variable.P2y , getImage("gesture_key") )
        .add(   variable.P3x , variable.P3y , getImage("gesture_key") )
        .print()
    ,
   newTimer("wait", 800)
        .start()
        .wait()
    ,         
    getCanvas("alien")
        .remove()
    
    

    //newText("continue","Press space bar to continue;")
        //.print()
    //,
    //newKey('space',' ')
         //.wait()

  )
  .log( "ID"     , getVar("ID")    )
  .log( "Item"   , variable.Item   )
  .log( "Group"  , variable.Group  )
)

SendResults( "send" )
newTrial( "final" ,
    newText("<p>Thank you for your participation!</p>")
        .print()
    ,
    newText("<p><a href='https://www.pcibex.net/' href='_blank'>Click here to validate your participation.</a></p>")
        .print()
    ,
    newButton("void")
        .wait()
)

