/**
 * Search service provides capability to search content(activities, question etc.) from  composite search API.
 * 
 * @class org.ekstep.services.searchService
 * @author Santhosh Vasabhaktula <santhosh@ilimi.in>
 */
org.ekstep.services.searchService = new(org.ekstep.services.iService.extend({
    /** 
     * @member {string} searchURL
     * @memberof org.ekstep.services.searchService
     */
    searchURL: function() {
        return this.getBaseURL() + this.getAPISlug() + this.getConfig('compositeEndPoint', '/composite');
    },
    initService: function() {},
    /**
     * Search method helps to get the content from search API
     * @param  {object}   request  request object will take all request parameters of search API
     * @param  {Function} callback returns error and response as arguments
     * @memberof org.ekstep.services.searchService
     */
    search: function(request, callback) {
        if(!_.isEmpty(this.getConfig('searchCriteria'))){
            request.request = _.merge(request.request, this.getConfig('searchCriteria'));
        };
        this.postFromService(this.searchURL() + this.getConfig('searchUrl', '/v3/search'), request, this.requestHeaders, callback);
    }
}));