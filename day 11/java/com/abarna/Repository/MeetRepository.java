package com.abarna.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.abarna.Entity.Meet;

public interface MeetRepository extends JpaRepository<Meet, Long> {

}