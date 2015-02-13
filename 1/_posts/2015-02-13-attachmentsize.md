---
layout: post
title: Over 1KB attachments doesn't send with mail
---

I'm using Centos 6.5 and postfix for sending email. I could send mail with 
[sendEmail](http://caspian.dotconf.net/menu/Software/SendEmail/) script. 
But when i try to send about 1KB attachment, i can send mail succesfully. 
If attachment is over 1KB, script aslo says:
    sendEmail[11971]: Email was sent successfully!  
But there is no mail in my mailbox.
Firstly i viewed the /var/log/maillog, and i saw there:
  lost connection with aspmx.l.google.com[173.194.78.27] while sending end of data -- message may be sent more than once
this lines.
I searched on the net, the solutions seems to change this lines in * /etc/postfix/main.cf* :  
    mailbox_size_limit = 0
    virtual_mailbox_limit = 0
    message_size_limit = 0
Zero means unlimited they says.. I did this and restart the postfix for apply the changes.
    service postfix restart
But still i couldn't send mails that has over 1KB attachments. Then i looked at packet traces with tcpdump:
    tcpdump -i eth0 -w out.cap & 
with this command to see where the packets break. 
It is sending the mail body but for attachment it breaks and try and try again to send the attachments and packet size about 2K.
Then i control the MTU value in ifconfig output.
    ifconfig 
it was 1500 . Then i try to discrease the MTU value for send the packets with more little size.
    ifconfig eth0 mtu 1000 up
    service network restart
With this action problem solved.

  
