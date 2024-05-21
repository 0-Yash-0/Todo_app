package com.yash.todoapp.todo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.yash.todoapp.todo.Todo;

public interface TodoRepository extends JpaRepository<Todo, Integer>{
	public List<Todo> findByUsername(String username);
}
