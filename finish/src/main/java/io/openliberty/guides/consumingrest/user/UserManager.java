// tag::copyright[]
/*******************************************************************************
 * Copyright (c) 2017, 2020 IBM Corporation and others.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 *
 * Contributors:
 *     IBM Corporation - Initial implementation
 *******************************************************************************/
// end::copyright[]
// tag::manager[]
package io.openliberty.guides.consumingrest.user;

import io.openliberty.guides.consumingrest.user.model.UserInfo;

import javax.enterprise.context.ApplicationScoped;
import java.util.ArrayList;
import java.util.List;

@ApplicationScoped
public class UserManager {

  public List<UserInfo> getUserInfo() {

    List<UserInfo> userInfoList = new ArrayList<>();

    for(int i=1; i<=20; i++) {
      UserInfo userInfo = new UserInfo();

      userInfo.setId(i);
      userInfo.setEmail("demo1@gmail.com");
      userInfo.setFirstName("Demo");
      userInfo.setLastName("John");
      userInfo.setGender("Male");

      userInfoList.add(userInfo);
    }

    return userInfoList;
  }
}
