var app = angular.module('myApp', ['pascalprecht.translate']);
app.config(['$translateProvider', function ($translateProvider) {

    // {{ 'aaaaaaaaaa' | translate }}

    $translateProvider.translations('en', {
        title:  'WORDISER, Learning English Made Simple',
        toggle_navigation: ' Toggle navigation',
        Home : 'Home',
        Learning_is_Hard : 'Learning is Hard',
        The_Solution : 'The Solution',
        Features : 'Features',
        What_Students_Say : 'What Students Say',
        Get_In_Touch : 'Get In Touch',
        Learning_English_Made_Simple : 'Learning English Made Simple',
        YOU_LEARN : 'YOU LEARN',
        BETTER : 'BETTER',
        WHEN_YOU : 'WHEN YOU',
        DON_T_FORGET : "'DON'T FORGET'",
        USE_WORDISER_TO : 'USE WORDISER TO',
        LEARN_NOT_FORGET : "'LEARN - NOT FORGET!'",
        YOUR_PERSONAL : 'YOUR PERSONAL',
        REVISER : 'REVISER',
        JOIN_OR_LOGIN : 'JOIN OR LOGIN',
        TEACHERS : 'TEACHERS',
        CLICK_FOR_VIDEO : 'CLICK FOR VIDEO',
        Learning_is_Hard : 'Learning is Hard',
        Learning_a_Language_is_hard : 'Learning a Language is_hard',
        when_up_to : 'when up to 80% of Learning is forgotten in 48 hours... Without revision!',
        What_is_more : 'What is more, after one week you are more than likely to remember only 10% of what you learned in class. Imagine all that time and effort - for nothing! Learning a language can be both time-consuming and frustrating, ',
        but_what_is_the_solution : 'but what is the solution?',
        Learning_English_is : 'Learning English is',
        not_so_hard_if_you_revise : 'not so hard if you revise',
        again_and_again : 'again and again, but that takes time... Wordiser saves on time and effort! An intelligent personal memory trainer, Wordiser saves your learning, tracks your progress and prompts you when it is time to study, personally reviewing and testing your English every time you use it. ',
        What_you_forget : 'What you forget... Wordiser remembers!',
        The_Solution_is_Memory_Training : 'The Solution is Memory Training',
        Using_Wordiser_as_a_Student : 'Using Wordiser as a Student',
        See_why_you : 'See why you',
        should : 'should',
        use_Wordiser : 'use Wordiser!',
        Using_Wordiser_Helps: 'Using Wordiser Helps...',
        FEATURES : 'FEATURES',
        Personalised_Learning : 'Personalised Learning',
        Study : 'Study',
        when_you_want : 'when you want, what you want',
        Focused_Learning : 'Focused Learning',
        Improve : 'Improve',
        your_pronunciation : 'your pronunciation, spelling, understanding and more',
        Motivated_Learning : 'Motivated Learning',
        Energise_learning : 'Energise learning',
        through_personalised_reviews_and_tests : 'through personalised reviews and tests',
        Tracked_Learning : 'Tracked Learning',
        Keep_track : 'Keep track',
        of_your_progress_and_performance : 'of your progress and performance',
        Rewarded_Learning : 'Rewarded Learning',
        Stay_motivated : 'Stay motivated',
        through_challenges_and_rewards : 'through challenges and rewards',
        Connected_Learning : 'Connected Learning',
        Connect_and_share : 'Connect and share',
        with_classes_and_your_teacher : 'with classes and your teacher',
        I_love_using_Wordiser : 'I love using Wordiser. We use it in class. My teacher gives me homework on it. I also check class notes, to revise what we did in class.',
        Pamela : 'Pamela',
        Wordiser_helps_me_remember : 'Wordiser helps me remember the words we do in class, and grammar too! Really useful.',
        Tetsuro : 'Tetsuro',
        STUDY : 'STUDY',
        PLAY : 'PLAY',
        PROGRESS : 'PROGRESS',
        Get_latest_Wordiser_news : 'Get latest Wordiser news!',
        You_have_successfully_subscribed : 'You have successfully subscribed!',
        You_have_already_subscribed : 'You have already subscribed.',
        SUBSCRIBE : 'SUBSCRIBE',
        Your_message_has_been_sent_successfully : 'Your message has been sent successfully!',
        Your_message_or_contact_info_is_empty : 'Your message or contact info is empty!',
        Message_already_send : 'Message already send.',
        Email_must_be_valid_and_message : 'E-mail must be valid and message must be longer than 1 character.',
        SEND_MESSAGE : 'SEND MESSAGE',
        GIVE_FEEDBACK : 'GIVE FEEDBACK',
        Home : 'Home',
        
      });

  // add translation table
  $translateProvider
    .preferredLanguage('en');
}]);

app.controller('APPCtrl', ['$scope', function($scope) {
  var parseAppId = 'iXHZYAvuBaX7aXdZrd2Yhu8O0PrKCMad6aIivZNx',
            parseAppKey = '8KMDmMepdWWXnBNF87bEcNlR3ArEFEjzH8oB9Lwo';

            Parse.initialize(parseAppId, parseAppKey);

            Parse.serverURL = 'https://parseapi.back4app.com';

    $scope.subscribe  = function(){
        console.log('$scope.subscribe_email');
        if (!$scope.subscribe_email_succeed) {
            var SBEmail = Parse.Object.extend('SBEmail');
            var email = new SBEmail();
            email.set('email',$scope.subscribe_email);
            email.save();
            $scope.subscribe_email_succeed = true;
        }else{
            $scope.subscribe_email_error = true;
        }
        
    }

    $scope.sendMessage = function() {
        if (!$scope.name || !$scope.email || !$scope.subject || !$scope.message) {
            $scope.empty_info = true;
        };

        if ($scope.success) {
            $scope.already_send = true;
        };

        if ($scope.name && $scope.email && $scope.subject && $scope.message && !$scope.success) {
            $scope.message_feedback = 'Messae has been sent!';

            $scope.success = true;
            $scope.empty_info = false;
            var WEBContact = Parse.Object.extend('WEBContact');
            var contact = new WEBContact();
            contact.set('name', $scope.name);
            contact.set('email', $scope.email);
            contact.set('subject', $scope.subject);
            contact.set('message', $scope.message);
            contact.save().then(function(contact){

                // $scope.message_feedback = 'Messae has been sent!';
                // console.log($scope.message_feedback );
                console.log(contact);
            });
        };


        
    }
}]);