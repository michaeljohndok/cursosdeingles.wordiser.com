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
        Learning_a_Language_is_hard : 'Learning a Language is ard',
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

    $translateProvider.translations('spanish', {
        title: 'WORDISER, Learning English Made Simple',
        toggle_navigation: ' Toggle navigation',
        Home : 'Inicio',
        Learning_is_Hard1 : 'Problemas para aprender ingles',
        The_Solution : 'Como aprender ingles',
        Features : 'Cursos de ingles gratis',
        What_Students_Say : 'Recomendaciones para cursos',
        Get_In_Touch : 'Ponte en contacto',
        Learning_English_Made_Simple : 'Learning English Made Simple',
        YOU_LEARN : 'PARA APRENDER INGLES',
        BETTER : 'MEJOR',
        WHEN_YOU : 'ÚSE WORDISER PARA',
        DON_T_FORGET : 'APRENDER - NO OLVIDAR!',
        USE_WORDISER_TO : 'USE_WORDISER_TO',
        LEARN_NOT_FORGET : 'LEARN_NOT_FORGET',
        YOUR_PERSONAL : 'CURSOS GRATIS',
        REVISER : 'DESDE EL INGLES BASICO HASTA EL ADVANZADO',
        JOIN_OR_LOGIN : 'ÚNASE O INICIE SESIÓN',
        CLICK_FOR_VIDEO : 'HAGA CLIC PARA VIDEO',
        Learning_is_Hard2 : 'Aprender inglés es difícil',
        Learning_a_Language_is_hard : 'Aprender un idioma es difícil',
        when_up_to : 'cuando se olvida hasta el 80% del aprendizaje en 48 horas ... ¡Sin revisión!',
        What_is_more : 'Además, después de una semana de inglés, es posible que solo recordarás el 10% de lo que aprendiste en el curso. Imagina todo ese tiempo y esfuerzo, ¡por nada! Aprender ingles puede ser lento y frustrante, ',
        but_what_is_the_solution : 'pero ¿cuál es la solución? ¿Cómo puedes aprender incluso el ingles básico?',
        Learning_English_is : 'Aprender ingles',
        not_so_hard_if_you_revise : 'no es tan difícil si revisas',
        again_and_again : 'una y otra vez, pero eso lleva tiempo... ¡Wordiser ahorra tiempo y esfuerzo! Un formador de memoria personal inteligente, Wordiser guarda su aprendizaje, realiza un seguimiento de su progreso y le indica cuándo es el momento de estudiar, revisar y probar su ingles personalmente cada vez que lo usa.',
        What_you_forget : 'Lo que olvidas... Wordiser recuerda: ¡tu revisador y formador de ingles gratis!',
        The_Solution_is_Memory_Training : 'La solución es la capacitación en memoria',
        Using_Wordiser_as_a_Student : '',
        See_why_you : '',
        should : '',
        use_Wordiser : '',
        Using_Wordiser_Helps: 'Usando Wordiser le ayuda...',
        FEATURES : ' LO MEJOR SOBRE NUESTRA TECNOLOGÍA Y CURSOS DE INGLES',
        Personalised_Learning : 'Aprendizaje personalizado',
        Study : 'Estudia',
        when_you_want : 'ingles cuando quieras, lo que quieras',
        Focused_Learning : 'Aprendizaje enfocado',
        Improve : 'Mejore',
        your_pronunciation : 'su pronunciación, ortografía, gramática, comprensión auditiva y más',
        Motivated_Learning : 'Aprendizaje motivado',
        Energise_learning : 'Energice el aprendizaje',
        through_personalised_reviews_and_tests : 'a través de exámenes y pruebas personalizados',
        Tracked_Learning : 'Aprendizaje seguido',
        Keep_track : 'Mantenga un registro',
        of_your_progress_and_performance : 'de su progreso en ingles y su curso',
        Rewarded_Learning : 'Aprendizaje recompensado',
        Stay_motivated : 'Manténgase motivado en ingles',
        through_challenges_and_rewards : 'a través de desafíos y recompensas',
        Connected_Learning : 'Aprendizaje conectado',
        Connect_and_share : 'Posible conecta y comparte',
        with_classes_and_your_teacher : 'con las clases y tu profesor',
        I_love_using_Wordiser : 'Me encanta usar Wordiser. Lo usamos en clase. Mi maestra me da tareas en eso. También reviso las notas de clase, para revisar lo que hicimos en clase.',
        Pamela : 'Pamela',
        Wordiser_helps_me_remember : 'Wordiser me ayuda a recordar las palabras que necesito aprender. ¡Es genial para la gramática también! Realmente util.',
        Tetsuro : '',
        STUDY : 'ESTUDIAR',
        PLAY : 'JUGAR',
        PROGRESS : 'AVANZAR',
        Get_latest_Wordiser_news : '¡Recibe las últimas noticias de Wordiser!',
        You_have_successfully_subscribed : '¡Su suscripción ha sido exitosa!',
        You_have_already_subscribed : '¡Usted ya se ha suscrito!',
        SUBSCRIBE : 'SUSCRIBIR',
        Your_message_has_been_sent_successfully : '¡Tu mensaje ha sido enviado exitosamente!',
        Your_message_or_contact_info_is_empty : '¡Su mensaje o información de contacto está vacía!',
        Message_already_send : '¡El mensaje ya ha sido enviado!',
        Email_must_be_valid_and_message : '¡El correo electrónico debe ser válido y el mensaje debe tener más de 1 carácter!',
        SEND_MESSAGE : 'ENVIAR MENSAJE',
        GIVE_FEEDBACK : 'DAR OPINION',
        WORDISER_FOR_ENGLISH_LANGUAGE_STUDENTS : 'COMO APRENDER INGLES GRATIS CON WORDISER',
        Your_name : 'Tu nombre',
        Your_email : 'Tu correo electrónico',
        Subject : 'Asunto',
        Message : 'Mensaje',
        SEND_MESSAGE : 'ENVIAR MENSAJE',
        GIVE_FEEDBACK : 'DAR OPINION',
      });

  // add translation table
  $translateProvider
    .preferredLanguage('spanish');
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