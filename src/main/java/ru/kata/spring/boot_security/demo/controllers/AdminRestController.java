package ru.kata.spring.boot_security.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import ru.kata.spring.boot_security.demo.entities.User;
import ru.kata.spring.boot_security.demo.service.RoleService;
import ru.kata.spring.boot_security.demo.service.UserService;
import java.util.List;

@RestController
@RequestMapping("/api")
public class AdminRestController {
@Autowired
    private UserService userService;
@Autowired
    private RoleService  roleService;
    @GetMapping("/users")
    public List<User> allUsers(){
        List <User> users = userService.getUsersList();
        return users;
    }
    @GetMapping("/new/{id}")
    public User getUser (@PathVariable Long id) {

        User user = userService.getUserById(id);
        roleService.getAllRoles();

        return user;

    }
    @PostMapping("/new")
    public User newUser (@RequestBody User user){
      userService.addUser(user);


      return user;
    }
}
