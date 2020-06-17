public with sharing class selectorController {
    public selectorController() {

    }

    private static Integer v = 1;

    @AuraEnabled
    public static String getVal(String val) {
        return 'In getVal:' + val + v++;
    }

    @AuraEnabled(cacheable=true)
    public static String init() {
        return 'Great!!!';
    }
}
