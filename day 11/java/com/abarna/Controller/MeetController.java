package com.abarna.Controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.abarna.Entity.Meet;
import com.abarna.Service.MeetService;

@RestController
public class MeetController {

	@Autowired
    private final MeetService meetService;

    public MeetController(MeetService meetService) {
        this.meetService = meetService;
    }

    @GetMapping("/meet")
    public List<Meet> getAllMeet() {
        return meetService.getAllMeet();
    };

    @GetMapping("/meet/{id}")
    public Meet getUserById(@PathVariable Long id) {
        return meetService.getMeetById(id);
    }

    @PostMapping("/meet")
    public Meet createUser(@RequestBody Meet meet) {
        return meetService.createMeet(meet);
    }

    @PutMapping("/meet/{id}")
    public Meet updateMeet(@PathVariable Long id, @RequestBody Meet meet) {
        meet.setId(id);
        return meetService.updateMeet(meet);
    }

    @DeleteMapping("/meet/{id}")
    public void deleteMeet(@PathVariable Long id) {
        meetService.deleteMeet(id);
    }
}
