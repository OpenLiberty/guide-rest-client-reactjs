// tag::copyright[]
/*******************************************************************************
 * Copyright (c) 2017 IBM Corporation and others.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 *
 * Contributors:
 *     IBM Corporation - Initial implementation
 *******************************************************************************/
// end::copyright[]
package io.openliberty.guides.consumingrest.user;

import java.util.List;
import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import io.openliberty.guides.consumingrest.user.model.UserInfo;

@RequestScoped
@Path("/")
public class UserResource {

    @Inject
    UserManager manager;

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<UserInfo> getUserInfo() {
        List<UserInfo> userInfoList = manager.getUserInfo();
        return userInfoList;
    }
}
