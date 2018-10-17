'use strict';
angular
    .module('carroList')
    .component('carroList', {
        templateUrl: 'carro-list/carro-list.template.html',
        controller: function CarroListController(){
            this.carros = [
                {
                    nome : 'Celta',
                    fabricante: 'Chevrollet'
                },
                {
                    nome : 'Focus',
                    fabricante : 'Ford'
                },
                {
                    nome : 'Sentra',
                    fabricante: 'Nissan'
                }

            ];
        }

    });
