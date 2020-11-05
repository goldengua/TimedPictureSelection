PennController.ResetPrefix(null); // Initiates PennController
AddHost("https://github.com/goldengua/TimedPictureSelection/tree/pitch/chunk_includes/");
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
    newImage("1","as.png")
         .size(100,100)
    ,
    newImage("2","c.png")
         .size(100,100)
    ,
    newImage("3","d.png")
         .size(100,100)
    ,
    newImage("4","e.png")
         .size(100,100)
    ,
    newImage("5","fs.png")
         .size(100,100)
    ,
    newImage("6","gs.png")
         .size(100,100)
    ,
    newCanvas(300,200)
         .add(   0 , 0 , getImage("1") )
         .add(   100 , 0 , getImage("2") )
         .add(   200 , 0 , getImage("3") )
         .add(   0 , 100 , getImage("4") )
         .add( 100, 100, getImage("5"))
         .add( 200, 100, getImage("6"))
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
    //newAudio('bgm',"drumloop_65.wav")
        //.play()
    //,
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

    //newAudio("tone", variable.AudioFile)
        //.play()
    //,
    newImage("pitch_img",variable.ImageFile)
        .size(200,200)
    ,
    newCanvas("alien",200,200)
        .add(   0 , 0 , getImage("pitch_img") )
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
