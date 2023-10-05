package com.abarna.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.abarna.Entity.Meet;
import com.abarna.Repository.MeetRepository;

@Service
public class MeetService {

	@Autowired
    private MeetRepository meetRepository;

    public MeetService(MeetRepository meetRepository) {
        this.meetRepository = meetRepository;
    }

    public List<Meet> getAllMeet() {
        return meetRepository.findAll();
    }

    public Meet getMeetById(Long id) {
        return meetRepository.findById(id).orElse(null);
    }

    public Meet createMeet(Meet meet) {
        return meetRepository.save(meet);
    }

    public Meet updateMeet(Meet meet) {
        return meetRepository.save(meet);
    }

    public void deleteMeet(Long id) {
        meetRepository.deleteById(id);
    }
}
