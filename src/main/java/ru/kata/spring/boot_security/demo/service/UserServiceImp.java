package ru.kata.spring.boot_security.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import ru.kata.spring.boot_security.demo.entities.Role;
import ru.kata.spring.boot_security.demo.entities.User;
import ru.kata.spring.boot_security.demo.repositories.UserRepository;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class UserServiceImp implements UserService {

    private final
    UserRepository userRepository;
   private final
   PasswordEncoder passwordEncoder;

    @Autowired
    public UserServiceImp(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByUsername(username);
        if (user == null) {
            throw new UsernameNotFoundException("User not found");
        }
        return user;
    }

    @Override
    public User getUserById(Long userId) {
        Optional<User> userFromDb = userRepository.findById(userId);
        return userFromDb.orElse(new User());
    }

    @Override
    public List<User> getUsersList() {
        return userRepository.findAll();
    }

    @Override
    public boolean addUser(User user) {
        User userFromDB = userRepository.findByUsername(user.getEmail());
        if (userFromDB != null) {
            return false;
        }

        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userRepository.save(user);
        return true;
    }

    @Override
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

    @Override
    public void updateUser(Long userId, User updateUser) {
        User userToBeUpdate = userRepository.getById(userId);
        userToBeUpdate.setFirstname(updateUser.getFirstname());
        userToBeUpdate.setLastname(updateUser.getLastname());
        userToBeUpdate.setAge(updateUser.getAge());
        userToBeUpdate.setEmail(updateUser.getEmail());
        userToBeUpdate.setPassword(passwordEncoder.encode(updateUser.getPassword()));
        userToBeUpdate.setRoles((Set<Role>) updateUser.getRoles());
        userRepository.save(userToBeUpdate);

    }
}
