'use strict';

/**
 * post controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::post.post', ({ strapi }) => ({
    async exampleAction(ctx) {
      try {
        ctx.body = "ok";
      } catch (err) {
        ctx.body = err;
      }
    },
    async find(ctx){
      const {data,meta}= await super.find(ctx);
      if(ctx.state.user) return {data,meta};
      const filterData= data.filter((post)=>!post.attributes.premium);
      return {data:filterData, meta}
    },
    async likePost(ctx){
        if(!ctx.state.user) return ctx.forbidden("Only Authenticated peoples likes posts")
        
    }
  }));
