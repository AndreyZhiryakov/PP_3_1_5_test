package ru.kata.spring.boot_security.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.kata.spring.boot_security.demo.entities.Role;
import ru.kata.spring.boot_security.demo.entities.User;
import ru.kata.spring.boot_security.demo.service.RoleService;
import ru.kata.spring.boot_security.demo.service.UserService;
import java.util.List;

@RestController
@RequestMapping("/api")
public class AdminRestController {
private final UserService userService;
private final RoleService  roleService;
 @Autowired
    public AdminRestController(UserService userService, RoleService roleService) {
        this.userService = userService;
        this.roleService = roleService;
    }

    @GetMapping()
    public ResponseEntity <List<String>> getTest () {
        List<String> st = List.of("1", "2");
        return new ResponseEntity<>(st, HttpStatus.OK);
    }

    @GetMapping("/admin")
    public ResponseEntity allUsers(){
        List <User> users = userService.getUsersList();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }
    @GetMapping("/{id}")
    public User getUser (@PathVariable Long id) {

        return userService.getUserById(id);

    }
    @PostMapping("/new")
    public ResponseEntity<User> newUser (@RequestBody User user){
      userService.addUser(user);
        System.out.println(user);
      return ResponseEntity.ok(user);
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

    @DeleteMapping("delete/{id}")
    public ResponseEntity<HttpStatus> deleteUser(@PathVariable("id") Long id) {
        userService.deleteUser(id);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @GetMapping("/admin/roles")
    public ResponseEntity allRoles(){
        List <Role> roles = roleService.getAllRoles();
        return new ResponseEntity<>(roles, HttpStatus.OK);
    }


}
