package ru.kata.spring.boot_security.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
    @GetMapping("/{id}")
    public User getUser (@PathVariable Long id) {

        return userService.getUserById(id);

    }
    @PostMapping("/new")
    public ResponseEntity<HttpStatus> newUser (@RequestBody User user){
      userService.addUser(user);
      return ResponseEntity.ok(HttpStatus.OK);
    }

    @GetMapping("/edit/{id}")
    public User getUserUpdate (@PathVariable Long id) {

        return userService.getUserById(id);

    }
    @PatchMapping("edit/{id}")
    public ResponseEntity<HttpStatus> updateUser(@PathVariable ("id") Long id, @RequestBody User user){
    userService.updateUser(id,user);
    return ResponseEntity.ok(HttpStatus.OK);
    }

    @DeleteMapping("edit/{id}")
    public ResponseEntity<HttpStatus> deleteUser(@PathVariable("id") Long id) {
        userService.deleteUser(id);
        return ResponseEntity.ok(HttpStatus.OK);
    }
}
