"use strict";

/**
 * `check-role` policy
 */

module.exports = (policyContext, config, { strapi }) => {
  const { userRole } = config;
  console.log(userRole);
  console.log(policyContext?.state?.user?.role?.name);
  console.log(strapi.service);

  // console.log(policyContext.state.user.name);
  const isEligible =
    policyContext?.state?.user && policyContext?.state?.user?.role?.name == userRole;
  if (isEligible) {
    return true;
  }

  return false;
}; 
