import { LightningElement,track,wire } from 'lwc';
import getVal from '@salesforce/apex/selectorController.getVal';
import init from '@salesforce/apex/selectorController.init';

export default class Selector extends LightningElement {
    selectedProductId;
    @track val = '';

    handleProductSelected(evt) {
        var abc = evt.detail;
        console.log('before getVal:');
        getVal({val:abc})
        .then(result => {
            var i;
            this.val = result;
            console.log('in .then:' + result);
        })
        .catch(error => {
            console.log('in catch:' + error);
        });
        console.log('after getVal:');
        this.selectedProductId = evt.detail;
    }

    @wire(init)
    ainit({ error, data }) {
        console.log('before init');
        if (data) {
            console.log('1In init:' + data);     
            this.val = data;
        } else if (error) {
            console.log('error init:' + JSON.stringify(error));
        }
        console.log('after init');
    }
}
