PennController.ResetPrefix(null); // Initiates PennController
AddHost("https://github.com/goldengua/TimedPictureSelection/tree/pitch/chunk_includes/");
//AddHost("https://expt.pcibex.net/ibexexps/goldengua/absolute_pitch/");
// Start typing your code here
 // Initiates PennController

// Start typing your code here

Sequence( "welcome" , "practice",randomize("experiment") , "send" , "final" )
newTrial( "welcome" ,
    defaultText
        .print()
    ,
    newText("<p>Welcome!</p>")
    ,
    newText("<p>In this experiment, you will first see four different kinds of aliens. </p>")
    ,
    newText("<p>Press <strong> [a] [s] [d] and [j] [k] [l] </strong>to catch these aliens as quickly as possible.</p>")
    ,
    newText("<p><strong>Green</strong> alien: press <strong>[a]</strong>; <strong>Red </strong>alien: press <strong>[s]</strong>; <strong>Purple</strong> alien: press <strong>[d]</strong>; </p>")
    ,
    newText("<p><strong>Black</strong> alien: press <strong>[j]</strong>; <strong>Orange</strong> alien: press <strong>[k]</strong>; <strong>Blue</strong> alien: press <strong>[l]</strong>. </p>")
    ,
    newText("<p>Please get yourself familiar with the action required for catching aliens. </p>")
    ,
    newText("<p>Please enter your ID and then click the button below to start the experiment.</p>")
    ,
    newImage("c.png","c.png")
         .size(100,100)
    ,
    newImage("d.png","d.png")
         .size(100,100)
    ,
    newImage("e.png","e.png")
         .size(100,100)
    ,
    newImage("fs.png","fs.png")
         .size(100,100)
    ,
    newImage("gs.png","gs.png")
         .size(100,100)
    ,
    newImage("as.png","as.png")
         .size(100,100)
    ,
    newCanvas(300,200)
         .add(   0 , 0 , getImage("c.png") )
         .add(   100 , 0 , getImage("d.png") )
         .add(   200 , 0 , getImage("e.png") )
         .add(   0 , 100 , getImage("fs.png") )
         .add( 100, 100, getImage("gs.png"))
         .add( 200, 100, getImage("as.png"))
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
    newTrial( "practice" ,

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
    
    newAudio("tone", variable.AudioFile)
        .play("loop")
    ,
    newTimer("wait", 800)
        .start()
        .wait()
    ,

    newImage("practice_img", variable.ImageFile)
        .size(200,200)
   ,

    newText("description","This alien is&nbsp")
        .after(newText(variable.color))
        .after(newText(",&nbspplease press key&nbsp"))
        .after(newText(variable.key))
        .print()
   ,
    newCanvas("alien",200,200)
        .add( 0, 220, getText("description") )
        .add(   0 , 0 , getImage("practice_img").size(200,200))
        .print()
    ,
    newKey('response',"asdjkl")
        .log()
        .wait()
    ,
    getAudio("tone")
        .stop()
    ,

   getKey("response")
       .test.pressed(variable.key)
       .success( newAudio("success", "success.wav").play() )
       .failure( newAudio("failure", "failure.wav").play(), newText(variable.key).bold().center().color("red").settings.css("font-size", "400%").print() )
    ,
   newTimer("wait2", 800)
        .start()
        .wait()
    ,         
    getCanvas("alien")
        .remove()


  )
  .log( "ID"     , getVar("ID")    )
  .log( "Item"   , variable.Item   )
  .log( "Group"  , variable.Group  )
)

Template( variable =>
    newTrial( "experiment" ,

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

    newAudio("tone", variable.AudioFile)
        .play("loop")
    ,
    newTimer("wait", 800)
        .start()
        .wait()
    ,

    newImage("exp_img", variable.ImageFile)
        .size(200,200)
   ,
    newCanvas("alien",200,200)
        .add(   0 , 0 , getImage("exp_img").size(200,200))
        .print()
    ,
    newKey('response',"asdjkl")
        .log()
        .wait()
    ,
    getAudio("tone")
        .stop()
    ,

   getKey("response")
       .test.pressed(variable.key)
       .success( newAudio("success", "success.wav").play() )
       .failure( newAudio("failure", "failure.wav").play(), newText(variable.key).bold().center().color("red").settings.css("font-size", "400%").print() )
    ,
   newTimer("wait2", 800)
        .start()
        .wait()
    ,         
    getCanvas("alien")
        .remove()


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
