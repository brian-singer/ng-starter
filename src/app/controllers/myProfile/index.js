import './style.styl';
import ngImg from './images/angular.png';

export default function( $scope, $state, Authentication ) {
    'ngInject';

    $scope.ngImg = ngImg;

    $scope.logout = function() {
        Authentication.logOut();
        $state.go( 'app.home' );
    };

    $scope.modal = {
        'title': 'Title',
        'content': 'Hello Modal<br />This is a multiline message!'
    };
}