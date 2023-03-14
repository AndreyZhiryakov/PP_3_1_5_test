package ru.kata.spring.boot_security.demo.service;

import ru.kata.spring.boot_security.demo.entities.Role;
import java.util.List;
import java.util.Optional;

public interface RoleService {
    public Optional<Role> findById(long id);

    public List<Role> getAllRoles();

    public void addRole(Role role);

}
