package ru.kata.spring.boot_security.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import ru.kata.spring.boot_security.demo.entities.User;
import ru.kata.spring.boot_security.demo.service.UserService;

import java.security.Principal;

@Controller
public class UserRestController {
    @Autowired
    private UserService userService;

    @GetMapping(value = "api/user")

    public ResponseEntity<HttpStatus> userPage(Principal principal) {
        userService.loadUserByUsername(principal.getName());
        return ResponseEntity.ok(HttpStatus.OK);
    }
}
