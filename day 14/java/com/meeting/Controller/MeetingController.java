package com.meeting.Controller;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;

import com.meeting.Modal.Meeting;
import com.meeting.Service.MeetingService;

import java.util.List;



@CrossOrigin
@RestController
@RequestMapping("/api/meetings") 
public class MeetingController {

    private final MeetingService meetingService; 

    @Autowired
    public MeetingController(MeetingService meetingService) {
        this.meetingService = meetingService;
    }

    
    @PostMapping("/create")
    public Meeting createMeeting(@RequestBody Meeting meeting) {
        return meetingService.createMeeting(meeting);
    }


    @GetMapping("/get")
    public List<Meeting> getAllMeetings() {
        return meetingService.getAllMeetings();
    }

    
    @GetMapping("/{id}")
    public Meeting getMeetingById(@PathVariable("id") int meetingId) {
        return meetingService.getMeetingById(meetingId);
    }


    @PutMapping("/{id}")
    public Meeting updateMeeting(@PathVariable("id") int meetingId, @RequestBody Meeting updatedMeeting) {
        return meetingService.updateMeeting(meetingId, updatedMeeting);
    }

    
    @DeleteMapping("/{id}")
    public void deleteMeeting(@PathVariable("id") int meetingId) {
        meetingService.deleteMeeting(meetingId);
    }
}
