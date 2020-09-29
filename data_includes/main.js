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
    newText("<p>In this experiment, you will first see four different kinds of arrows. </p>")
    ,
    newText("<p>Quickly swipe through corresponding keys as suggested by the pictures with directional arrows.</p>")
    ,
    newText("<p>For the first picture, you should swipe keys<strong>A, S, D</strong>. Observe the four pictures and get yourself familiar with swiping on keyboard.</p>")
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


    newTimer("wait", 800)
        .start()
        .wait()
    ,

    newAudio("tone", variable.AudioFile)
        .play()
    ,
    newImage("gesture_key",variable.ImageFile)
        .size(200,200)
    ,
    newCanvas("alien",200,200)
        .add(   0 , 0 , getImage("gesture_key") )
        .print()
    ,
    newKey('response',"abcd")
        .log()
        .wait()
    ,
    getCanvas("alien")
        .remove()
    ,
    getKey("response")
       .test.pressed(variable.key)
       .success( newText("success", "Congratulations! You caught the right alien.").print() )
       .failure( newText("failure", "You are wrong. Better luck next time.").print() )
    ,

    newText("continue","Press space bar to continue;")
        .print()
    ,
    newKey('space',' ')
         .wait()
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
